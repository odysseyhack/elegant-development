/* solium-disable */

pragma solidity >=0.5.0;
import "./Ownable.sol";

contract BaseAccount is Ownable {
  string internal label;
  uint internal targetBalance;
  uint internal targetDate;

  constructor(string memory _label, uint _targetBalance, uint _targetDate)
    public
  {
    label = _label;
    targetBalance = _targetBalance;
    targetDate = _targetDate;
  }

  function getAccountInfo()
    public
    view
    isOwner(tx.origin)
    returns (string memory, uint, uint, uint)
  {
    return (label, address(this).balance, targetBalance, targetDate);
  }

  function getRule() public view isOwner(tx.origin) {}
}
