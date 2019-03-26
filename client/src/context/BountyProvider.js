import React, {Component} from 'react'
import axios from 'axios'

const BountyContext = React.createContext()


class BountyProvider extends Component {
    constructor() {
        super()
        this.state = {
            bounties: []
        }
    }

    getBounties = () => {
        axios.get("/bounty/v1").then(res => {
            // console.log(res.data)
            this.setState({
                bounties: res.data
            })
        })
    }

    addBounty = newBounty => {
        
        axios.post("/bounty/v1", newBounty).then(res => {
            this.setState(prevState => ({
                bounties: [...prevState.bounties, res.data]
                
            }))
        })
    }


    deleteBounty = _id => {
        //maybe change instead of typing, clicking a yes or no button 
        const bountyNameVerification = this.state.bounties.find(bounty => bounty._id === _id) 
        const answer = prompt(`Are you sure you want to delete ${bountyNameVerification.firstName} ${bountyNameVerification.lastName}?`)
        if(answer === "yes" || answer === "Yes" || answer === onkeypress(89)) {
            axios.delete(`/bounty/v1/${_id}`).then(res => {
                // alert(res.data)
                this.setState(prevState => ({
                    bounties: prevState.bounties.filter(bounty => bounty._id !== _id)
                }))
            })
        } else {
            alert(`${bountyNameVerification.firstName} is successfully deleted.`)
        }
    }

    updateBounty = (_id, updates) => {
        axios.put(`/bounty/v1/${_id}`, updates).then(res => {
            this.setState(prevState => ({
                bounties: prevState.bounties.map(bounty => bounty._id === _id ? res.data : bounty)
            }))
        })
    }

    render() {
        return (
            <BountyContext.Provider
                value={{
                    bounties: this.state.bounties,
                    getBounties: this.getBounties,
                    addBounty: this.addBounty,
                    deleteBounty: this.deleteBounty,
                    updateBounty: this.updateBounty
                }}>
                {this.props.children}
            </BountyContext.Provider>
        )
    }
}

export default BountyProvider


export const withBounties = C => props => (
    <BountyContext.Consumer>
        { value => <C {...props} {...value}/>}
    </BountyContext.Consumer>
)