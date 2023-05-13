const hre = require("hardhat");
async function main() {
  

  const CoffeeShop = await hre.ethers.getContractFactory("CoffeeShop"); //fetching bytecode and ABI
  const coffeeShop = await CoffeeShop.deploy(); //creating an instance of our smart contarct

  await coffeeShop.deployed(); //deploying smart contract

  console.log(
    `"deployed contract address:",  ${coffeeShop.address}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//0x3308905349d940721dC3c2709a026eD19aF745Bb