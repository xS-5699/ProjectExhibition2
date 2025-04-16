'use client';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { getContract } from '../../lib/contract';
import ABI from '../../lib/abi.json';

export default function Home() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [contract, setContract] = useState<any>(null);
  const [targetAddress, setTargetAddress] = useState('');
  const [reputation, setReputation] = useState<number | null>(null);
  const [txStatus, setTxStatus] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = provider.getSigner();
      signer.then((s) => {
        const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "";
        const c = new ethers.Contract(contractAddress, ABI, s);
        setContract(c);
      });
    }
  }, []);

  const connectWallet = async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWalletAddress(accounts[0]);
    } else {
      alert('Please install MetaMask');
    }
  };

  const register = async () => {
    try {
      const tx = await contract.registerUser();
      await tx.wait();
      setTxStatus('Registered successfully');
    } catch (err) {
      setTxStatus('Registration failed');
      console.error(err);
    }
  };

  const rateUser = async (score: number) => {
    try {
      const tx = await contract.rateUser(targetAddress, score);
      await tx.wait();
      setTxStatus('User rated successfully');
    } catch (err) {
      setTxStatus('Rating failed');
      console.error(err);
    }
  };

  const checkReputation = async () => {
    try {
      const rep = await contract.getReputation(targetAddress);
      setReputation(Number(rep));
    } catch (err) {
      setTxStatus('Could not fetch reputation');
      console.error(err);
    }
  };
  const isRegistered = async () => {
    try {
      const user = await contract.users(targetAddress);
      alert(user.registered ? "Address is registered ✅" : "Address is NOT registered ❌");
    } catch (err) {
      console.error("Error checking registration:", err);
    }
  };
  

  return (
    <main className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-4">Decentralized Reputation System</h1>

      {!walletAddress ? (
        <button
          onClick={connectWallet}
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          Connect Wallet
        </button>
      ) : (
        <>
          <p className="mb-2">Connected: {walletAddress}</p>
          <button onClick={register} className="bg-green-600 text-white px-4 py-2 rounded mb-4">
            Register
          </button>

          <div className="my-4">
            <input
              type="text"
              placeholder="Enter user address"
              value={targetAddress}
              onChange={(e) => setTargetAddress(e.target.value)}
              className="border px-4 py-2 mr-2"
            />
            <button
              onClick={() => rateUser(1)}
              className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
            >
              +1
            </button>
            <button
              onClick={() => rateUser(-1)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              -1
            </button>
          </div>

          <button
            onClick={checkReputation}
            className="bg-gray-700 text-white px-4 py-2 rounded"
          >
            Check Reputation
          </button>
          <button
            onClick={isRegistered}
            className='bg-purple-600 text-white px-4 py-2 rounded mt-4'
          >
            Check Registration
          </button>

          {reputation !== null && (
            <p className="mt-4 text-xl">
              Reputation of {targetAddress}: {reputation}
            </p>
          )}
        </>
      )}

      {txStatus && <p className="mt-4 text-yellow-500">{txStatus}</p>}
    </main>
  );
}
