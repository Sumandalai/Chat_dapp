require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://rpc-amoy.polygon.technology/";
const {NEXT_PUBLIC_PRIVATE_KEY} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
// const {API_URL,PRIVATE_KEY}=process.env;
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    polygon_amoy: {
      url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
};
