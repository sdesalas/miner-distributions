const USDCToken = artifacts.require("USDCToken");

module.exports = async function(deployer) {
  console.log('deploying USDCToken..');
  await deployer.deploy(USDCToken);
};
