const myFriendList = ["shamim","sssss", "siam", "ritu", "labonno", "rahim", "karim"];

function getBestFriend(myFriendList) {
    // let bestFriend = "";
    for(const friend of myFriendList) {
        // console.log(friend)
        if(friend.length % 2 != 0) {
            return friend;
        }
    }
    return friend;
}


const bestFriend = getBestFriend(myFriendList);
console.log(bestFriend);