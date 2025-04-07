pragma solidity ^0.8.19;

contract ReputationSystem {
    struct User {
        uint256 reputation;
        bool exists;
    }

    mapping(address => User) public users;
    mapping(address => mapping(address => bool)) public hasRated;

    event ReputationUpdated(address indexed user, uint256 newReputation);

    function registerUser() public {
        require(!users[msg.sender].exists, "User already registered");
        users[msg.sender] = User(0, true);
    }

    function rateUser(address _user, bool _positive) public {
        require(users[_user].exists, "User does not exist");
        require(msg.sender != _user, "Cannot rate yourself");
        require(!hasRated[msg.sender][_user], "You have already rated this user");

        if (_positive) {
            users[_user].reputation += 1;
        } else {
            if (users[_user].reputation > 0) {
                users[_user].reputation -= 1;
            }
        }

        hasRated[msg.sender][_user] = true;
        emit ReputationUpdated(_user, users[_user].reputation);
    }

    function getReputation(address _user) public view returns (uint256) {
        require(users[_user].exists, "User does not exist");
        return users[_user].reputation;
    }
}
