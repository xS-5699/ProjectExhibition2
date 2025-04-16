import { ethers } from 'ethers';
import ABI from './abi.json'; // Make sure you have abi.json in the same folder

export const CONTRACT_ADDRESS = '0xYourDeployedContractAddressHere';

export const getContract = (providerOrSigner: ethers.Provider | ethers.Signer) => {
  return new ethers.Contract(CONTRACT_ADDRESS, ABI, providerOrSigner);
};
