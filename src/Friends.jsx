import { useEffect, useState } from "react";
import SingleFriend from "./SingleFriend";

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data =>setFriends(data));
    }, [])

    console.log(friends);

    return (
        <div className="Friends">
            <h2>Friend List</h2>
            {
                friends.map(friend => <SingleFriend friend={friend}></SingleFriend>)
            }
        </div>
    );
};

export default Friends;