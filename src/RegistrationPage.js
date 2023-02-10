import React from 'react'
import axios from 'axios'

class RegistrationPage extends React.Component{
	constructor(){
		super();
		this.state={
			username:"",
			password:"",
			mobileNo:"",
			email:""
		}
	}
	handleSave=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	handleSend=(e)=>{
		e.preventDefault()
		axios.post("http://localhost:4005/add",
			{username:this.state.username,
			password:this.state.password,
			mobileNo:this.state.mobileNo,
			email:this.state.email}
			).then((res)=>{
				console.log(res.data)
			})
		this.setState({
			username:"",password:"",mobileNo:"",email:""
		})
	}
	render(){
		return(
			
			<form onSubmit={this.handleSend}>
				<p><input
					placeholder="Enter username"
					onChange={this.handleSave}
					name="username"
					className="pfields"
					value={this.state.username}/></p>
				<p><input
					placeholder="Enter password"
					onChange={this.handleSave}
					name="password"
					className="pfields"
					value={this.state.password}/></p>
				<p><input
					placeholder="Enter mobile no"
					onChange={this.handleSave}
					name="mobileNo"
					className="pfields"
					value={this.state.mobileNo}/></p>
				<p><input
					placeholder="Enter email"
					onChange={this.handleSave}
					name="email"
					className="pfields"
					value={this.state.email}/></p>
				<button className="pfields">Send</button>
			
			</form>

			)
	}
}
export default RegistrationPage