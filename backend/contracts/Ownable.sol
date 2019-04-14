/* solium-disable */

pragma solidity >=0.5.0;

contract Ownable {
  address payable internal owner = tx.origin;
  uint private creationTime = now;
  modifier isOwner(address ownerAddr) {
    require(owner == ownerAddr, "Sender Unauthorized");
    _;
  }
}
