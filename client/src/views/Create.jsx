import React, {useState} from 'react'
import Form from '../components/Form'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
const Create = () => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState([]);
    
    const createPirate = pirate =>{
        axios.post("http://localhost:8000/api/pirates", pirate)
        .then(res=>{
            console.log(res);
            navigate(`/pirate/${res.data._id}`)
        })
        .catch(err=>{
            const errorResponse = err.response.data.errors;
            const errorArr = [];

            for (const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr)
        })
    }
  return (
    <div>
        <h1>Add Pirate</h1>
        <Form onSubmitProp={createPirate} errors={errors}/>
        <Link to={"/pirates"}>Back</Link>
    </div>
  )
}

export default Create