"use client";

import { useEffect, useState } from "react";
import { ethers } from "ethers";

declare global {
    interface Window {
      ethereum?: any; //declaring this so that ts knows about ethereum
    }
  }
  
export default function ConnectWallet({ onConnect }: { onConnect: (signer: any) => void }) {
  const [address, setAddress] = useState("");

  async function connectWallet() {
    if (!window.ethereum) return alert("Install MetaMask!");
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const addr = await signer.getAddress();
    setAddress(addr);
    onConnect(signer);
  }

  return (
    <button onClick={connectWallet} className="p-2 bg-blue-500 text-white rounded">
      {address ? `Connected: ${address.slice(0, 6)}...` : "Connect Wallet"}
    </button>
  );
}
