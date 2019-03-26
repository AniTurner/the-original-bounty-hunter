import React from 'react'


const BountyForm = props => {
    const {handleSubmit, handleChange, firstName, lastName, isAlive, bountyAmount, species, sideOfTheForce, btnText} = props
    return (
        <form onSubmit = {handleSubmit}>
            <input 
                className='name' 
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                placeholder="First Name"
                required/>
            <input
                className='name'
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                placeholder="Last Name"/>
            <input
                type="number"
                name="bountyAmount"
                value={bountyAmount}
                onChange={handleChange}
                placeholder="Enter bounty amount..."/>
            <input 
                className='checkbox'
                type="checkbox"
                name='isAlive'
                value={isAlive}
                onChange={handleChange}/>
                <label>Alive...?</label>
            <select
                className='species'
                name="species"
                onChange={handleChange}
                value={species}
                placeholder="Select the species">
                <option></option>
                <option value={species.human}>Human</option>
                <option value={species.droid}>Droid</option>
                <option value={species.wookiee}>Wookiee</option>
                <option value={species.chiss}>Chiss</option>
                <option value={species.zabrak}>Zabrak</option>
                <option value={species.hutt}>Hutt</option>
                <option value={species.gungan}>Gungan</option>
                <option value={species.zeltron}>Zeltron</option>
                <option value={species.ewok}>Ewok</option>
            </select>
            
            <label>
            <input
                className='radio'
                type="radio" 
                name="sideOfTheForce"
                value="Light Side"
                checked= {sideOfTheForce === "Light Side"}
                onChange={handleChange}
            />
            Light Side
            </label>

            <label>
            <input
                className='radio'
                type="radio"
                name="sideOfTheForce"
                value="Dark Side"
                checked= {sideOfTheForce === "Dark Side"}
                onChange={handleChange}
            />
            Dark Side
            </label>
            <button>{btnText}</button>

        </form>
    )
}


export default BountyForm