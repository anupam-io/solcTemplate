const Web3 = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const seedPhrase = 'YOUR-SEED-PHRASE';
// a sequence of 12 words that allow access to a cryptocurrency wallet
// very private information, make sure it is secure

const rpcEndpoint = 'YOUR-RPC-ENDPOINT';
// an endpint for connecting your web3 instance wallet and the blockchain node
// might be:
//  - your ganache-CLI OR GUI network id
//  - received from infura for a test network/mainnet

let provider = new HDWalletProvider({
  mnemonic: {
    phrase: seedPhrase
  },
  providerOrUrl: rpcEndpoint
});

const web3 = new Web3(provider);
// HDWalletProvider is compatible with Web3. Use it at Web3 constructor, just like any other Web3 Provider

const compiledContract = require('./../build/MyContract.json');
const minGas = 1000000;

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account ', accounts[0]);

  const res = await new web3.eth.Contract(compiledContract.abi)
    .deploy({
      data: compiledContract.evm.bytecode.object
    })
    .send({
      from: accounts[0],
      gas: minGas
    });

  console.log("Successfully deployed at: ", res.options.address);

  return process.exit(0);
};

deploy();