# Miner Distributions

A monorepo app for distributing BTC miner investments with smart contracts

## Components

- [`app/`](app/): A Next.js React web app.
- [`eth-backend/`](eth-backend): A [truffle](https://trufflesuite.com)-based solidity contract deployer.

## Motivation

I am seriously excited about smart-contract technology, this is an amazing area with limitless potential. I am also tired of hearing it applied to what basically amounts to another way to mint Non-Fungible Tokens (NFTs) and sell them to clueless punters.

Because of this, I have been on the lookout for use-cases to apply it to, and when I heard about BTC miners wanting to distribute their mining profits on the basis of a smart contract I got super excited. This is a perfect domain to use smart contracts on, and the implications of a successful prototype apply to a lot of shared-investment use-cases. Company dividend distributions, syndicated property rentals, bonds etc etc. Wow!

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
