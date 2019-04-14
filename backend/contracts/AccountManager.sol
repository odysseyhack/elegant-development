/* solium-disable */

pragma solidity >=0.5.0;

import "./Ownable.sol";
import "./RetirementAccount.sol";
import "./BaseAccount.sol";
import "./SavingsAccount.sol";

contract AccountManager is Ownable {
  struct AccountInfo {
    address accountAddress;
    string label;
    uint index;
    uint currentBalance;
    uint targetBalance;
    uint targetDate;
  }

  address payable[] accounts;
  uint savingsAccountCount;
  uint investmentCount = 0; // counter to keep track of the times an investment has taken place
  uint lastRewardAccountIndex = 0;
  uint[] lastInvestmentProposal;
  uint fires;

  function createRetirementAccount(uint _dateOfBirth, uint _targetBalance)
    public
    returns (address)
  {
    RetirementAccount newRetirementAccount = new RetirementAccount(
      _dateOfBirth,
      _targetBalance
    );
    
    address payable pAddr = address(uint160(address(newRetirementAccount)));

    accounts.push(pAddr);

    return address(newRetirementAccount);
  }

  function createSavingsAccount(
    string memory _label,
    uint _targetBalance,
    uint _targetDate
  ) public returns (address) {
    SavingsAccount savingsAccount = new SavingsAccount(
      _label,
      _targetBalance,
      _targetDate
    );
    address payable pAddr = address(uint160(address(savingsAccount)));

    accounts.push(pAddr);
    savingsAccountCount++;
    return address(savingsAccount);
  }

  function getAllSavingAccounts()
    public
    view
    isOwner(tx.origin)
    returns (address payable[] memory)
  {
    return accounts;
  }

  function getAccountInfo(uint index)
    public
    view
    returns (
    address _addr,
    uint _index,
    string memory _label,
    uint _currentBalance,
    uint _targetBalance,
    uint _targetDate
  )
  {
    BaseAccount acc = BaseAccount(accounts[index]);
    (string memory label, uint currentBalance, uint targetBalance, uint targetDate) = acc.getAccountInfo(

    );
    return (accounts[index], index, label, currentBalance, targetBalance, targetDate);
  }

  function proposeInvestment(uint[] memory percentages)
    public
    returns (uint fireRewardAccountIndex)
  {
    lastInvestmentProposal = percentages;
    if (!((investmentCount % 5) == 0)) {
      return 9001;
    } else {
      lastRewardAccountIndex++;
      BaseAccount acc = BaseAccount(accounts[lastRewardAccountIndex]);
      (string memory label, uint currentBalance, uint targetBalance, uint targetDate) = acc.getAccountInfo(

      );
      if (keccak256(abi.encodePacked((label))) == keccak256(
        abi.encodePacked(("retirement"))
      )) {
        lastRewardAccountIndex++;
      }
      return lastRewardAccountIndex;
    }
  }

  function invest(uint[] memory percentages) public payable {
    if (percentages[lastRewardAccountIndex] < lastInvestmentProposal[lastRewardAccountIndex]) {
      for (uint8 i = 0; i < percentages.length; i++) {
        BaseAccount acc = BaseAccount(accounts[lastRewardAccountIndex]);
        (string memory label, uint currentBalance, uint targetBalance, uint targetDate) = acc.getAccountInfo();
        if ((keccak256(abi.encodePacked((label))) == keccak256(abi.encodePacked(("retirement")))) && (percentages[i] == 0)) {
          fires++;
        }
      }
    }
    for (uint i = 0; i < percentages.length; i++) {
       accounts[i].transfer((msg.value / 100) * percentages[i]);
    }
  }

  function getFireCount() 
    public 
    view
    isOwner(tx.origin) 
    returns(uint _fires) 
    {
      return fires;
    }
}
