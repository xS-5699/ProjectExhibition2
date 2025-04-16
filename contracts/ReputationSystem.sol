// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ReputationSystem {
    struct User {
        bool registered; // bool dekhne k liye if the user is registered or not
        int256 reputation; //to give score of user in integer
    }

    mapping(address => User) public users; // mapping of user's eth address

    event UserRegistered(address indexed user); // when a user registers
    event ReputationUpdated(address indexed user, int256 newReputation); // when reputation is +1 or -1

    function registerUser() public {
        require(!users[msg.sender].registered, "User already registered"); // checking if the user is already registered using "require"
        users[msg.sender] = User(true, 0); // registering new user and setting registered to true and reputation to 0
        emit UserRegistered(msg.sender); // triggers event and adds users address
    }

    function rateUser(address _user, int256 _score) public {
        require(users[msg.sender].registered, "You must be registered to rate"); //checks if the one whos rating is registered
        require(users[_user].registered, "User not registered");// checks if the one whos BEING rated is registered
        require(_score == 1 || _score == -1, "Only +1 or -1 ratings allowed");

        users[_user].reputation += _score;
        emit ReputationUpdated(_user, users[_user].reputation);
    }

    function getReputation(address _user) public view returns (int256) {
        require(users[_user].registered, "User not registered");
        return users[_user].reputation;
    } //IMP: used "VIEW" here hence the user can only view the database and not edit it
}
