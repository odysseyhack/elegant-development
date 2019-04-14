pragma solidity >=0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/SavingsFactory.sol";

contract TestSavingsFactory {
  event value(address x, address y);

  function testParticipate() public {
    SavingsFactory sf = SavingsFactory(DeployedAddresses.SavingsFactory());
    sf.participate();

    bool r;
    (r, ) = address(this).call(abi.encodePacked(sf.participate.selector));
    Assert.isFalse(r, "User should not be able to participate twice");
  }

  function testWhereIsMyManager() public {
    SavingsFactory sf = new SavingsFactory();
    address accountManagerAddress = sf.participate();
    address fetchedAddress = sf.iLostMyManager();
    emit value(fetchedAddress, accountManagerAddress);
    Assert.equal(
      fetchedAddress,
      accountManagerAddress,
      "addresses should be equal"
    );
  }

}
