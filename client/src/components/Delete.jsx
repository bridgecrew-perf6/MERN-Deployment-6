import React from 'react'
import axios from 'axios'

const Delete = (props) => {
    const {pirateId, list, updatedList} = props;
    const deletePirate = e => {
        axios.delete(`http://localhost:8000/api/pirates/${pirateId}`)
            .then(res=>{
                const updateList = list.filter((pirate)=> pirate._id !== pirateId);
                console.log(list);
                updatedList(updateList)
                console.log(updatedList);
            })
    }

  return (
    <button onClick={deletePirate}>Walk The Plank</button>
  )
}

export default Delete