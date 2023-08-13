// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await ethers.getSigners();
  // const balance = await deployer.getBalance();
  const Marketplace = await ethers.getContractFactory("Marketplace");
  const marketplace = await Marketplace.deploy();
  await marketplace.waitForDeployment();
  const address =  await marketplace.getAddress();
  console.log("Contract deployed to:", address);


  // const data = {
  //   address: marketplace.getAddress(),
  //   abi: JSON.parse(marketplace.interface.format('json'))
  // }

  const jsonOutput = marketplace.interface.format('json');

  let abi;
  try {
    // Try parsing the JSON string
    abi = JSON.parse(jsonOutput);
  } catch (error) {
    // If parsing fails, assume jsonOutput is already an object
    abi = jsonOutput;
  }

  const data = {
    address: address,
    abi: abi
  };

  console.log('Data:', data);


  fs.writeFileSync('scripts/Marketplace.json', JSON.stringify(data));

}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
