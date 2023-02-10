import React from 'react'

class ProductsPage extends React.Component{
	state={
		products:[
			{image:<img src="https://m.media-amazon.com/images/M/MV5BM2NjMzc1NmItNDdmZC00ZDJmLWFkZDMtODQ3MzE4ZmY2OWY5XkEyXkFqcGdeQXVyODE1OTI0Mjg@._V1_.jpg" alt="img1" height="20%" width="20%"/>,product:"HALO INFINITE",price:"49$"},
			{image:<img src="https://m.media-amazon.com/images/I/71U91XS0HmL._SL1500_.jpg" alt="img2" height="20%" width="20%"/>,product:"Call of Duty Black Ops-3",price:"60$"},
			{image:<img src="https://m.media-amazon.com/images/I/81ChC2WlrmL._SX522_.jpg" alt="img3" height="20%" width="20%"/>,product:"Dying Light-2",price:"80$"},
			{image:<img src="https://mx2games.com/wp-content/uploads/2021/07/marvels-spider-man-miles-morales-ps4.jpg" alt="img4" height="20%" width="20%"/>,product:"Marvels Spider-Man",price:"55$"},
			{image:<img src="https://m.media-amazon.com/images/I/81IXtVuvlmL._SL1500_.jpg" alt="img5" height="20%" width="20%"/>,product:"FIFA 23",price:"63$"},
			{image:<img src="https://assets.reedpopcdn.com/God-of-War-Ragnarok-PS4-UK.jpg" alt="img6" height="20%" width="20%"/>,product:"God of War Ragnarok",price:"45$"},
			{image:<img src="https://m.media-amazon.com/images/I/71MGlZZqIzL._SL1290_.jpg" alt="img7" height="20%" width="21%"/>,product:"Forza Horizon 5",price:"65$"},
			{image:<img src="https://dtzone.in/wp-content/uploads/2023/01/81pwetvirL.jpg" alt="img8" height="20%" width="20%"/>,product:"Hogwarts Legacy",price:"110$"},
			{image:<img src="https://m.media-amazon.com/images/I/81hSj3eVW-L._SL1500_.jpg" alt="img9" height="20%" width="20%"/>,product:"Assassins Creed Valhalla",price:"75$"}
				
		]
	}
	render(){
		console.log(this.state.products)
		return(
			<div>
				{/*<p>Name: {this.state.products[0].product}</p>
				<p>Price: {this.state.products[0].price}</p>*/}
				{
					this.state.products.map((prod)=>(
					<div>
						<p className="para">{prod.image}</p>
						<p className="para">{prod.product}</p>
						<p className="para">{prod.price}</p><br/><br/>
					</div>
					))
				}
			</div>
			)
		}
}
export default ProductsPage