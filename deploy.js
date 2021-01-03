const web3 = require("./web3");

const fs = require('fs-extra');
const compiledFile = require('./build/MyContract.json');
const minGas = '1000000';


const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account ', accounts[0]);

    const res = await new web3.eth.Contract(compiledFile.abi)
        .deploy({ data: compiledFile.evm.bytecode.object })
        .send({ from: accounts[0], gas: minGas });

    console.log('Contract successfully deployed on: ', res.options.address);
    fs.writeFileSync('DEPLOYADDRESS', res.options.address);

    return process.exit(0);
};

deploy();