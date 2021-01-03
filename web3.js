const HDWalletProvider = require('truffle-hdwallet-provider');
const seedPhrase = 'narrow detail raw leaf cat nest dose surprise rapid rebuild ticket only';
const rpcEndPoint = 'HTTP://127.0.0.1:7545';

const provider = new HDWalletProvider(seedPhrase, rpcEndPoint);

const Web3 = require('web3');
const web3 = new Web3(provider);


module.exports = web3