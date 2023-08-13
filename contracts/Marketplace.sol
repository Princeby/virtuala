// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";



contract Marketplace is ERC721URIStorage{

    address payable owner;

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;

    uint listPrice = 0.01 ether;

    constructor() ERC721("Marketplace", "MKT") {
        owner = payable(msg.sender);
    }
    

    struct Property {
        uint tokenId;
        address payable owner;
        address payable seller;
        uint price;
        bool currentlyListed;
    }

    mapping(uint=> Property) private idToListedProperty;

    function updatePrice(uint _newPrice) public payable {
        require(owner == msg.sender,"Only owner can change price");
        listPrice = _newPrice;
    }

    function getListPrice() public view returns (uint) {
        return listPrice;
    }

    function getLatestIdToListedToken() public view returns (Property memory ) {
        uint currentTokenId = _tokenIds.current();
        return idToListedProperty[currentTokenId];
    }

    function getListedForTokenId(uint tokenId) public view returns (Property memory) {
        return idToListedProperty[tokenId];
    }

    function getCurrentToken() public view returns (uint) {
        return _tokenIds.current();
    }

    function createToken(string memory tokenURI, uint price) public payable returns (uint) {
        require(msg.value == listPrice, "Send enough ether to list");
        require(price > 0, "Make sure not negatve");

        _tokenIds.increment();
        uint currentTokenId = _tokenIds.current();
        _safeMint(msg.sender, currentTokenId);

        _setTokenURI(currentTokenId, tokenURI);
        createListedToken(currentTokenId, price);

        return currentTokenId;
    }

    function createListedToken(uint tokenId, uint price) private {
        idToListedProperty[tokenId] = Property(
            tokenId,
            payable(address(this)),
            payable(msg.sender),
            price,
            true
        );

        _transfer(msg.sender, address(this), tokenId);
    }

    function getAllProperty() public view returns(Property[] memory) {
        uint propertyCount = _tokenIds.current();
        Property[] memory propertyToken = new Property[](propertyCount);

        uint currentIndex = 0;

        for(uint i=0; i < propertyCount; i++) {
            uint currentId = i + 1;
            Property storage currentProperty = idToListedProperty[currentId];
            propertyToken[currentIndex] = currentProperty;
            currentIndex += 1;
        }

        return propertyToken;
    }

    function executeSale(uint tokenId) public payable {
        uint price = idToListedProperty[tokenId].price;
        require(msg.value == price, "Put in the asking price, please");

        address seller = idToListedProperty[tokenId].seller;

        idToListedProperty[tokenId].currentlyListed = true;
        idToListedProperty[tokenId].seller = payable(msg.sender);
        _itemsSold.increment();

        approve(address(this), tokenId);

        _transfer(address(this), msg.sender, tokenId);
        

        payable(owner).transfer(listPrice);
        payable(seller).transfer(msg.value);
    }

}