# Custom smart contract development kit with mocha & ganache-cli

# Instructions for deploying on a network/ganache
 - If you are testing on ganache
   - you don't need a seed phrase, as you can query ganache for unlocked accounts
 - If you want to deploy on a network(such as a test network or mainnet)
   - you need to set `seedPhrase` and `rpcEndpoint` appropriately

## Commands
 - `npm i`: for package installation
 - `npm run compile`: compilation of contracts
 - `npm run test`: *mocha* tests

## Dependencies
```
  "dependencies": {
    "fs-extra": "^9.0.1",
    "ganache-cli": "^6.12.1",
    "mocha": "^8.2.1",
    "solc": "^0.8.0",
    "web3": "^1.3.1"
  }
```
