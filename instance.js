const web3 = require("./web3");
const fs = require('fs-extra');

const compiledContract = require('./build/MyContract.json');
const deployAddress = fs.readFileSync('DEPLOYADDRESS', 'utf8')

console.log(deployAddress);

const Instance = new web3.eth.Contract(
    compiledContract.abi,
    deployAddress
);

module.exports = Instance