/* solium-disable */

pragma solidity >=0.5.0;
import "./BaseAccount.sol";

contract RetirementAccount is BaseAccount {
  uint private seventyYearsMs = 31556952;

  modifier isRetired {
    require(block.timestamp > targetDate, "Unauthorized Access");
    _;
  }

  constructor(uint dateOfBirth, uint _targetBalance)
    public
    BaseAccount("retirement", _targetBalance, seventyYearsMs + dateOfBirth)
  {}

  function invest() public payable isOwner(msg.sender) {
    // nothing to do here
  }

  function getBalance() public view returns (uint) {
    return address(this).balance;
  }

}
