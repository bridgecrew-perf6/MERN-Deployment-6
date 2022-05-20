import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import Display from '../components/Display'


const Main = () => {
    const [pirates, setPirates] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pirates')
            .then(res=>{
                setPirates(res.data);
            })
            .catch(err=>console.log("Error: ", err))
    },[])

  return (
    <div>
        <h1>Pirate Crew</h1>
        <Link to={"/pirates/new"}>Add Pirate</Link>
        <Display pirates={pirates} updatedList={setPirates}/>
    </div>
  )
}

export default Main