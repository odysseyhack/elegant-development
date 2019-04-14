var SavingsFactory = artifacts.require("SavingsFactory");
var Ownable = artifacts.require("Ownable");
var BaseAccount = artifacts.require("BaseAccount");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(SavingsFactory);
  deployer.deploy(Ownable);
};
