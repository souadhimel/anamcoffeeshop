const hre = require("hardhat");
async function main() {
  

  const CoffeeShop = await hre.ethers.getContractFactory("CoffeeShop"); //fetching bytecode and ABI
  const coffeeShop = await CoffeeShop.deploy(); //creating an instance of our smart contarct

  await coffeeShop.deployed(); //deploying smart contract

  console.log(
    `"deployed contract address:",  ${CoffeeShop.address}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
