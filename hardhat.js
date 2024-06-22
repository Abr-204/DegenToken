require("@nomicfoundation/hardhat-toolbox");

const FORK_FUJI = false;
const FORK_MAINNET = false;
let forkingData = undefined;

if (FORK_MAINNET) {
  forkingData = {
    url: "https://api.avax.network/ext/bc/C/rpcc",
  };
}
if (FORK_FUJI) {
  forkingData = {
    url: "https://api.avax-test.network/ext/bc/C/rpc",
  };
}


module.exports = {
  solidity: "0.8.18",

  
  etherscan: {
    apiKey: "SAS4SCM1AV6ZR26S7ZJRJAZZFXE3QNW75F",
  },

  networks: {
    hardhat: {
      gasPrice: 225000000000,
      chainId: !forkingData ? 43112 : undefined, 
      forking: forkingData
    },

    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [

        "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"

      ]
    },

    mainnet: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: [

        "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"

      ]
    }
  }
