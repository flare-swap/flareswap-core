import 'hardhat-typechain'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import "@nomicfoundation/hardhat-verify";
require('dotenv').config()

export default {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    coston: {
      url: 'https://coston-api.flare.network/ext/bc/C/rpc',
      accounts: [process.env.PRIVATE_KEY],
    },
    coston2: {
      url: 'https://coston2-api.flare.network/ext/bc/C/rpc',
      accounts: [process.env.PRIVATE_KEY],
    },
    songbird: {
      url: 'https://songbird-api.flare.network/ext/bc/C/rpc',
      accounts: [process.env.PRIVATE_KEY],
    },
    flare: {
      url: 'https://flare-api.flare.network/ext/bc/C/rpc',
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      coston: "no-api-key-required",
    },
    customChains: [
      {
        network: 'coston',
        chainId: 16,
        urls: {
          apiURL: 'https://coston-explorer.flare.network/api',
          browserURL: 'https://coston-explorer.flare.network/',
        },
      },
      {
        network: 'coston2',
        chainId: 114,
        urls: {
          apiURL: 'https://coston2-explorer.flare.network/api',
          browserURL: 'https://coston2-explorer.flare.network/',
        },
      },
      {
        network: 'songbird',
        chainId: 19,
        urls: {
          apiURL: 'https://songbird-explorer.flare.network/api',
          browserURL: 'https://songbird-explorer.flare.network/',
        },
      },
      {
        network: 'flare',
        chainId: 14,
        urls: {
          apiURL: 'https://flare-explorer.flare.network/api',
          browserURL: 'https://flare-explorer.flare.network/',
        },
      },
    ],
  },
  solidity: {
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
      metadata: {
        bytecodeHash: 'none',
      },
    },
  },
}
