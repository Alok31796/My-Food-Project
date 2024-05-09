import React from 'react'

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:1,
            count2:2,
        };
    }
    render(){
        return(
            <div className="user">
                <h2>Count: {this.state.count}</h2>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                        count2:this.state.count2+1,
                    })
                }}>Update state count</button>
                <h2>Count: {this.state.count2}</h2>
            <h3>Name: {this.props.name}</h3>
            <h3>Address: Aziz nagar Madiyion {this.props.location}</h3>
            <h3>Email: Alok31796@gmail.com</h3>
            </div>
        )
    }
}
export default UserClass;