import React, { useState } from 'react'

const Form = (props) => {
    const {onSubmitProp, errors} = props
    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [treasure, setTreasure] = useState();
    const [catchPhrase, setCatchPhrase] = useState();
    const [crewPosition, setCrewPosition] = useState();
    const [pegleg, setPegLeg] = useState(true)
    const [eyePatch, setEyePatch] = useState(true)
    const [hookHand, setHookHand] = useState(true)

    const handleSubmit = e => {
        e.preventDefault();
        if(name !== undefined && image !== undefined && treasure!== undefined && catchPhrase!== undefined){
            onSubmitProp({name, image, treasure, catchPhrase, crewPosition, pegleg, eyePatch, hookHand});
        } else {
            alert("Submission failed")
        }
    }
  return (
    <form action="" onSubmit={handleSubmit}>
        {errors.length ?errors.map((err, index) => <p key={index}>{err}</p>):<></>}
        <div>
            <label htmlFor="">Pirate Name:</label>
            <input type="text" onChange={e=>setName(e.target.value)} value={name} />
        </div>
        <div>
            <label htmlFor="">Image URL:</label>
            <input type="text" onChange={e=>setImage(e.target.value)} value={image} />
        </div>
        <div>
            <label htmlFor=""># of Treasure Chest:</label>
            <input type="number" onChange={e=>setTreasure(e.target.value)} value={treasure} />
        </div>
        <div>
            <label htmlFor="">Pirate Catch Phrase:</label>
            <input type="text" onChange={e=>setCatchPhrase(e.target.value)} value={catchPhrase} />
        </div>
        <div>
            <label htmlFor="">Crew Position</label>
            <select name="" id="" onChange={e=>setCrewPosition(e.target.value)} value={crewPosition} >
                <option hidden> Choose a position</option>
                <option value="Captain">Captain</option>
                <option value="First Mate">First Mate</option>
                <option value="Quarter Master">Quarter Master</option>
                <option value="Boatswain">Boatswain</option>
                <option value="Powder Monkey">Powder Monkey</option>
            </select>
        </div>
        <div>
           <div>
                <label htmlFor="">Peg Leg</label>
                <input type="checkbox" name="" id="" checked={pegleg} onChange={e=>setPegLeg(e.target.checked)} value={pegleg} />
           </div>
            <div>
                <label htmlFor="">Eye Patch</label>
                <input type="checkbox" name="" id="" checked={eyePatch} onChange={e=>setEyePatch(e.target.checked)} value={eyePatch} />
            </div>
            <div>
                <label htmlFor="">Hand Hook</label>
                <input type="checkbox" name="" id="" checked={hookHand} onChange={e=>setHookHand(e.target.checked)} value={hookHand} />
            </div>
        </div>
        <button type="submit">Add Pirate</button>
    </form>
  )
}

export default Form