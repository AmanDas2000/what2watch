import React from 'react';
import { useForm } from "react-hook-form";
import { useStateValue } from './StateProvider';
import Row from './Row';
import requests from './request';
import './Page1.css';
import { Link } from 'react-router-dom';

function Page1({ id1, id2, title1, title2 }) {
    
    const { register, handleSubmit } = useForm();

    
    const [{ basket }, dispatch] = useStateValue();
    

    const addToBasket = (x)=>{
        dispatch({
        	type: 'add',
        		id: x,
        })
    };
    

    const removeFromBasket=(x)=>{
        dispatch({
            type:"remove",
            id: x,
        });
    }
    

    const onSubmit = (data) => {
        
        switch (data.Hindi) {
            case true: addToBasket(id1);
                break;
            case false: removeFromBasket(id1);
                break;
        }
        switch (data.English) {
            case true: addToBasket(id2);
                break;
            case false: removeFromBasket(id2);
                break;
        }
    } 
    
    
    
    return (
        <div >
            <form className="check1" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label><input type="checkbox" name="Hindi" ref={register} />{' '}{title1}</label>
                    <label><input type="checkbox" name="English" ref={register} />{' '}{title2}</label>
                    <label><input type="checkbox" name="Any" ref={register} />{' '}Any</label>
                    
                       
                    <input type="submit" value="go" />
                    

                </div>
            </form>
            
        </div>
    )
}

export default Page1
