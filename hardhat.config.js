require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL, // Your Sepolia RPC URL from Alchemy or Infura
      accounts: [process.env.PRIVATE_KEY], // Your wallet private key (NEVER SHARE THIS)
    },
  },
};
