// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract MyContract{
    address[] thisPool;

    function enter() public payable {
        for(uint i = 0; i < thisPool.length; i++){
            if(thisPool[i] == msg.sender){
                return;
            }
        }
        
        thisPool.push(msg.sender);
        
        if(thisPool.length >= 5){
            uint winnerId = uint(keccak256(abi.encodePacked(
                block.timestamp, thisPool[0], 
                thisPool[1], thisPool[2], 
                thisPool[3], thisPool[4]
            )))%5;

            payable(address(msg.sender)).transfer(address(this).balance - 1000000);
        }
    }
}