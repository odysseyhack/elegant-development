/* solium-disable */

pragma solidity >=0.5.0;

import "./BaseAccount.sol";

contract SavingsAccount is BaseAccount {
  modifier hasEnoughEther(uint amount) {
    require(address(this).balance > amount, "Not enough funds");
    _;
  }

  constructor(string memory _label, uint _targetBalance, uint _targetDate)
    public
    BaseAccount(_label, _targetBalance, _targetDate)
  {}

  function withdraw(uint amount)
    public
    isOwner(tx.origin)
    hasEnoughEther(amount)
  {
    owner.transfer(amount);
  }
}
