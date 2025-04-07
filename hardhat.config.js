require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL, // RPC URL dalni from alchmy 
      accounts: [process.env.PRIVATE_KEY], // wallet ki private key (sensitive)
    },
  },
};
