import React, { Component } from 'react'

export default class Contact extends Component {
	state={
		data:[
			{id:1,name:"Balaji"},
			{id:2,name:"Kalyan"},
			{id:3,name:"Chaitanya"},
			{id:4,name:"Ganesh"},
		],
		text:""
	}
	handleSave=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
  render() {
	let pair=this.state.text.toString().trim().toLowerCase();
	let duplicateData=[];
	if(pair && pair.length>0){
		duplicateData=this.state.data.filter((i)=>{
			return i.name.toLowerCase().match(pair)
		})
	}
	return (
	  <div>
		<input
			name="text"
			placeholder="Enter to search"
			onChange={this.handleSave}/>
			{
				duplicateData.map((i)=>(
					<p key={i.id}>{i.name}</p>
				))

			}
		</div>
	)
  }
}
