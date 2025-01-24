import { useState } from "react";

const Team = () => {
    const [team,setTeam] = useState(11);

    const handleAdd = () =>{
        const newAdd = team + 1 ;
        setTeam(newAdd);
    }
    const handleSub = () =>{
        const newSub = team - 1 ;
        setTeam(newSub);
    }

    return (
        <div>
            <p>------------practic-2----------------</p>
            <h3>Total Players:{team} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSub}>Sub</button>
            <p>----------------------------</p>
        </div>
    );
};

export default Team;