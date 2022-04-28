// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../vendor/OpenZeppelin/ERC20.sol";

/**
 * @dev Dummy USDC Token (for testing purposes)
 */
contract USDCToken is ERC20 {
    constructor() ERC20("USD Coin", "USDC") {
      _mint(msg.sender, 100000000000); // 100K USDC
    }

    function decimals() public view virtual override returns (uint8) {
        return 6;
    }
}
