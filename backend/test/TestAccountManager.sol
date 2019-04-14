pragma solidity >=0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/SavingsFactory.sol";
import "../contracts/AccountManager.sol";
import "../contracts/RetirementAccount.sol";

contract TestAccountManager {
  function testCreateRetirementAccount() public {
    SavingsFactory sf = SavingsFactory(DeployedAddresses.SavingsFactory());
    sf.participate();
    AccountManager am = AccountManager(sf.iLostMyManager());
    address retirementAcc = am.createRetirementAccount(740534400, 1000);
    RetirementAccount rc = RetirementAccount(retirementAcc);

    (string label, uint targetBalance, uint targetDate) = rc.getAccountInfo();
    Assert.equal(label, "retirement", "label should be retirement");
    Assert.equal(targetBalance, 1000, "targetBalance should be 1000");
    Assert.equal(targetDate, 772091352, "targetBalance should be 1000");
  }

  function testCreateSavingsAccount() public {
    SavingsFactory sf = new SavingsFactory();
    sf.participate();
    AccountManager am = AccountManager(sf.iLostMyManager());
    address savingsAddr = am.createSavingsAccount("car", 1000, 1592611200, 20);
    SavingsAccount sc = SavingsAccount(savingsAddr);

    (string label, uint targetBalance, uint targetDate) = sc.getAccountInfo();
    Assert.equal(label, "car", "label should be car");
    Assert.equal(targetBalance, 1000, "targetBalance should be 1000");
    Assert.equal(targetDate, 1592611200, "targetDate should be 1592611200");
  }

  function testInvestment() public {
    SavingsFactory sf = new SavingsFactory();
    sf.participate();
    am.createRetirementAccount(740534400, 100000);
    am.createSavingsAccount("car", 1000, 1592611200, 20);
    am.createSavingsAccount("bahamas", 1000, 1592611200, 20);
  }

}
