// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "truffle/Assert.sol"; // solhint-disable-line
import "truffle/DeployedAddresses.sol"; // solhint-disable-line
import "../contracts/Token/USDCToken.sol";

uint constant BALANCE = 100000000000;

contract TestUSDCToken {

  function testInitialBalanceUsingDeployed() public {
    USDCToken token = USDCToken(DeployedAddresses.USDCToken());

    Assert.equal(token.balanceOf(tx.origin), BALANCE, "Owner should have 100000000000 USDCToken initially");
  }

  function testInitialBalanceWithNewToken() public {
    USDCToken token = new USDCToken();

    Assert.equal(token.balanceOf(msg.sender), BALANCE, "Owner should have 100000000000 USDCToken initially");
  }

}
 
