// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Medicalsys {

    struct Manufacturer {
        string name;
        string batchNumber;
        uint manufactureDate;
        uint expiryDate;
        address from;
    }

    Manufacturer[] memos;
    address payable owner; // owner is going to receive funds

    constructor() {
        owner = payable(msg.sender);
    }

    function addProduct(string calldata name, string calldata batchNumber, uint expiryDurationInDays) external payable {
        require(msg.value > 0, "Please pay more than 0 ether");
        owner.transfer(msg.value);
        
        uint manufactureDate = block.timestamp;
        uint expiryDate = manufactureDate + (expiryDurationInDays * 1 days);

        memos.push(Manufacturer(name, batchNumber, manufactureDate, expiryDate, msg.sender));
    }

    function getMemos() public view returns (Manufacturer[] memory) {
        return memos;
    }
}
