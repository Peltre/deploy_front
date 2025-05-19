import React from 'react'
import Button from "./Button"
import { Link } from "react-router-dom";

const Item = ({item, ondelete}) => {
	return (
		<div>
			<ol>
				<Link to={"/items/" + item.id + "?q=react55"}>
			<li>{item.name}</li>
				</Link>
			<li>{item.price}</li>
			<li>
				<Button 
					name = "eliminar" 
					click={() => ondelete(item.id)}
				/>
			</li>
			</ol>
		</div>
	)
}

export default Item;
