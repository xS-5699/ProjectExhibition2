import { ethers } from 'ethers';
import ABI from './abi.json';

export const CONTRACT_ADDRESS = ''; // ye field to be entered after getting contract address [need testnet eth]

export const getContract = (providerOrSigner: ethers.Provider | ethers.Signer) => {
  return new ethers.Contract(CONTRACT_ADDRESS, ABI, providerOrSigner);
};
