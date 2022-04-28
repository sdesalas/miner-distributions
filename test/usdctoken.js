const USDCToken = artifacts.require("USDCToken");
const BALANCE = 100000000000;

contract('USDCToken', (accounts) => {
  it('should put 1000 USDCToken in the first account', async () => {
    const instance = await USDCToken.deployed();
    const balance = (await instance.balanceOf(accounts[0])).toNumber();
    const actual = balance.valueOf();

    assert.equal(actual, BALANCE, BALANCE + " wasn't in the first account");
  });
  it('should send coin correctly', async () => {
    const instance = await USDCToken.deployed();

    // Setup 2 accounts.
    const a1 = accounts[0];
    const a2 = accounts[1];

    // Get initial balances of first and second account.
    const a1StartBalance = (await instance.balanceOf(a1)).toNumber();
    const a2StartBalance = (await instance.balanceOf(a2)).toNumber();

    // Make transaction from first account to second.
    const amount = 10;
    await instance.transfer(a2, amount);

    // Get balances of first and second account after the transactions.
    const a1EndBalance = (await instance.balanceOf(a1)).toNumber();
    const a2EndBalance = (await instance.balanceOf(a2)).toNumber();

    assert.equal(a1EndBalance, a1StartBalance - amount, "Amount wasn't correctly taken from the sender");
    assert.equal(a2EndBalance, a2StartBalance + amount, "Amount wasn't correctly sent to the receiver");
  });
});
