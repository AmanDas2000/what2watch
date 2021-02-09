import React from 'react';
import { useStateValue } from './StateProvider';
import './Card.css';

function Card({ id, title, button }) {
    const [{ basket }, dispatch] = useStateValue();

	const addToBasket=()=>{
        dispatch({
            type: 'add',
            id: id,
        })
        // console.log(basket);
    };
    const removeFromBasket=()=>{
        dispatch({
            type:"remove",
            id: id,
        });
     }
    return (
        <div className="parameter">
            <p>{title}</p>
            <button onClick={addToBasket}>{button}</button>
            <button onClick={removeFromBasket}>{button}</button>
            
        </div>
    )
}

export default Card
