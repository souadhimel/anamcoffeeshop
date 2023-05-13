// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CoffeeShop{

    struct Memo{
        string name;
        string text;
        uint timestamp;
        address from;
    }

    Memo[] memos;
    address payable owner; //owner is going to receive funds //0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
    constructor(){
        owner = payable(msg.sender);
    }

    function buyCoffee(string calldata name,string calldata text) external payable{
        require(msg.value>0,"Please pay more than 0 ether");
        owner.transfer(msg.value);
        memos.push(Memo(name,text,block.timestamp,msg.sender));
    }

    function getMemos() public view returns(Memo[] memory){
        return memos;
    }
}