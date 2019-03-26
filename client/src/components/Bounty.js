import React, {Component} from 'react'
import BountyForm from './BountyForm.js'

class Bounty extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editToggle: false,
            firstName: props.firstName,
            lastName: props.lastName,
            isAlive: props.isAlive,
            bountyAmount: props.bountyAmount,
            species: props.species,
            sideOfTheForce: props.sideOfTheForce
        }
    }
    toggler = () => {
        this.setState(prevState => ({
            editToggle: !prevState.editToggle
        }))
    }

    handleChange = e => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        this.setState({
            [e.target.name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const {firstName, lastName, isAlive, species, sideOfTheForce, bountyAmount} = this.state
        const bountyUpdates = {
            firstName, 
            lastName,
            isAlive,
            species,
            sideOfTheForce,
            bountyAmount
        }
        this.props.updateBounty(this.props._id, bountyUpdates)
        this.toggler()
    }
    render() {
        const {firstName, lastName, isAlive, _id, deleteBounty, bountyAmount, species, sideOfTheForce} = this.props
        // const imgUrl = 'https://ak7.picdn.net/shutterstock/videos/6009377/thumb/1.jpg'
        return (
            <div key={_id} style={sideOfTheForce === "Light Side" ? {backgroundColor: "#2719C7", height: 150, textAlign: 'center'} :  {backgroundColor: "#d21c1c", height: 150, textAlign: 'center'}}>
                {!this.state.editToggle ?
                    <>
                        <h2>{firstName} {lastName}</h2>
                        <p style={{color: '#35ba2a'}}>Bounty: <span >$</span>{bountyAmount.toString()}</p>
                        <div>{species}</div>
                        <button className='delete' onClick={() => deleteBounty(_id)}>Delete</button>
                        <button className="edit" onClick={this.toggler}>Edit</button>
                    </>
                    :
                    <>
                        {/* <div className={`close ${(sideOfTheForce === "Light Side") ? "close-light" : "close-dark"}`}></div> */}
                        <BountyForm
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            btnText="Submit Edit"
                            {...this.state}
                        />
                        <button onClick={this.toggler}>X</button>
                    </>
                }    
              
            </div>
        )
    }
}

export default Bounty