# Custom smart-contract development kit with mocha & ganache-cli
## Instructions for deploying on a network/ganache
 - If you are testing on ganache
   - you don't need a seed phrase, as you can query ganache for unlocked accounts
 - If you want to deploy on a network(such as a test network or mainnet)
   - you need to set `seedPhrase` and `rpcEndpoint` appropriately

## How to run?
 - `npm i`: for package installation
 - `npm run compile`: compilation of contracts
```
> solctemplate@1.0.0 compile
> node compileAll.js

Compiling  MyContract.sol ...
MyContract.sol  compiled.
```
 - `npm run test`: *mocha* tests
```
> solctemplate@1.0.0 test
> mocha

  MyContract
    ✓ is correctly deploying on the network. (38ms)


  1 passing (166ms)
```
 - `npm run migrate`: run all deploy scripts in `migrations` folder
```
> solctemplate@1.0.0 migrate
> node migrateAll.js;

Working good here.
Attempting to deploy from account  0x00F167379B6492581e4D96389411cdc591c112C3
Successfully deployed at:  0xFb056459D6B077CC3cDE71E592f63dA07BEb78aC
```

## Dependencies
```
  "dependencies": {
    "@truffle/hdwallet-provider": "^1.2.2",
    "async": "^3.2.0",
    "fs-extra": "^9.0.1",
    "ganache-cli": "^6.12.1",
    "mocha": "^8.2.1",
    "solc": "^0.8.0",
    "web3": "^1.3.1"
  }
```
