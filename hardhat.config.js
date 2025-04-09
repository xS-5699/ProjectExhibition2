require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.28"
      },
      {
        version: "0.8.20"
      }
    ]
  },
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "", // Infura or Alchemy URL
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : []
    }
  }
};
