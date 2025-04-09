const hre = require("hardhat");

async function main() {
  const Reputation = await hre.ethers.getContractFactory("Reputation");
  const reputation = await Reputation.deploy();

  await reputation.deployed();

  console.log(`Reputation contract deployed to: ${reputation.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
