require('@nomiclabs/hardhat-waffle');
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "goerli",
  networks: {
    goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/i229bT1SpelutVSZXjAJs77iX375tUVD',
      accounts:['4bbc89deedadfd1e5350e544b47911025ddf6e887efdf27342757ece7d49a81b']
    }
  },
  // set path its define a main contract path or file
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};
