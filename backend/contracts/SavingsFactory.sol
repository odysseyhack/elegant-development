/* solium-disable */

pragma solidity >=0.5.0;
import "./AccountManager.sol";

contract SavingsFactory {
  modifier isNotAParticipant {
    require(
      userAccountManagerMap[tx.origin] == address(0),
      "Already participating"
    );
    _;
  }

  modifier isAParticipant {
    require(userAccountManagerMap[tx.origin] != address(0), "User unknown");
    _;
  }

  mapping(address => address) private userAccountManagerMap;

  function iLostMyManager() public view returns (address) {
    return userAccountManagerMap[tx.origin];
  }

  function participate() public isNotAParticipant returns (address) {
    AccountManager am = new AccountManager();
    userAccountManagerMap[tx.origin] = address(am);
    return address(am);
  }
}
