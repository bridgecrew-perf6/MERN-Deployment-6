import React from 'react'
import { Link } from 'react-router-dom'
import Delete from './Delete'
const Display = (props) => {
    const {pirates, updatedList} = props
  return (
    <div>
        {
            pirates.length ?
            pirates.map((pirate, i)=>{
                return(
                    <div key={i} style={{border:"2px solid black"}}>
                        <img src={pirate.image} alt="" style={{width: "400px"}}/>
                        <h4>{pirate.name}</h4>
                        <Link to={`/pirate/${pirate._id}`}><button>View Pirate</button></Link>
                        <Delete pirateId={pirate._id} list={pirates} updatedList={updatedList}/>
                    </div>
                )
            })
            :<></>
        }
    </div>
  )
}

export default Display