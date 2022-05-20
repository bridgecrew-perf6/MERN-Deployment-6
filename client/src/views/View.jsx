import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
const View = () => {
    const [pirate, setPirate] = useState({})
    const {id} = useParams();

        useEffect(()=> {
        axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then(response=> {
                setPirate(response.data);
            })
            .catch(err=>console.log("Error: ", err))
    }, [])
  return (
    <div>
        <h2>{pirate.name}</h2>
        <img src={pirate.image} alt="" style={{width: "400px"}}/>
        <h3>"{pirate.catchPhrase}"</h3>
        <div>
            <h4>About</h4>
            <p>Position: {pirate.crewPosition}</p>
            <p>Treasures: {pirate.treasure}</p>
            <p>Peg Leg: {pirate.pegleg === true? <p>Yes</p>: <p>No</p>}</p>
            <p>Eye Patch: {pirate.eyePatch === true? <p>Yes</p>: <p>No</p>}</p>
            <p>Hook Hand: {pirate.hookHand === true? <p>Yes</p>: <p>No</p>}</p>

        </div>
        <Link to={"/pirates"}>Home</Link>
    </div>
  )
}

export default View