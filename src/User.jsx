import { useEffect, useState } from "react";

const User = () => {
    const [users,setUsers] =useState([]); // 1. Declar state to data hold

    // 2.  use effect with call back dependency
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))   // use fetch to load data 
    },[])

    return (
        <div>

            <p>--------------userEffect---------------</p>
            <h2>User Effect state use</h2>
            <h3>Users: {users.length}</h3>
            
        </div>
    );
};

export default User;