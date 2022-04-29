# Miner Distributions

A monorepo app for distributing BTC miner investments with smart contracts

## Components

- [`app/`](app/): A Next.js React web app.
- [`eth-backend/`](eth-backend): A [truffle](https://trufflesuite.com)-based solidity contract deployer.

## Development

Please install [Ganache](https://trufflesuite.com/ganache/) and check it works properly. 

It should create an ETH node running in http://localhost:7545 and open up a UI like this:

![image](https://user-images.githubusercontent.com/534414/165810534-272eddc9-e28b-4118-8cdf-978e3889fb00.png)

Install Node.js v16, then run the following commands via Bash or similar CLI

```sh
$ node -v
16.13.2
$ npm -v
8.1.2
$ npm install --workspaces
$ npm test --workspaces
```
