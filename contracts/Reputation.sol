// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ReputationSystem {
    struct User {
        bool registered;
        int256 reputation;
    }

    mapping(address => User) public users;

    event UserRegistered(address indexed user);
    event ReputationUpdated(address indexed user, int256 newReputation);

    function registerUser() public {
        require(!users[msg.sender].registered, "User already registered");
        users[msg.sender] = User(true, 0);
        emit UserRegistered(msg.sender);
    }

    function rateUser(address _user, int256 _score) public {
        require(users[msg.sender].registered, "You must be registered to rate");
        require(users[_user].registered, "User not registered");
        require(_score == 1 || _score == -1, "Only +1 or -1 ratings allowed");

        users[_user].reputation += _score;
        emit ReputationUpdated(_user, users[_user].reputation);
    }

    function getReputation(address _user) public view returns (int256) {
        require(users[_user].registered, "User not registered");
        return users[_user].reputation;
    }
}
