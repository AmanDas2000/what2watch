import React from 'react';
import { useForm } from "react-hook-form";
import { useStateValue } from './StateProvider';
import Row from './Row';
import requests from './request';
import './Page2.css';
import { Link } from 'react-router-dom';

function Page3() {
    
    const { register, handleSubmit } = useForm();

    
    const [{ basket }, dispatch] = useStateValue();
    
    let thisyear = '&primary_release_date.gte=2021-01-01';
    let year3 = '&primary_release_date.gte=2018-01-01';
    let year5 = '&primary_release_date.gte=2016-01-01';
    let year10 = '&primary_release_date.gte=2011-01-01';

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
        
        switch (data.ThisYear) {
            case true: addToBasket(thisyear);
                break;
            case false: removeFromBasket(thisyear);
                break;
        }
        switch (data.Year3) {
            case true: addToBasket(year3);
                break;
            case false: removeFromBasket(year3);
                break;
        }
        switch (data.Year5) {
            case true: addToBasket(year5);
                break;
            case false: removeFromBasket(year5);
                break;
        }
        switch (data.Year10) {
            case true: addToBasket(year10);
                break;
            case false: removeFromBasket(year10);
                break;
        }

    } 
    
    
    return (
        <div >
            <form className="check" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label><input type="checkbox" name="ThisYear" ref={register} />{' '}This Year</label>
                    <label><input type="checkbox" name="Year3" ref={register} />{' '}Last 3 Years</label>
                    <label><input type="checkbox" name="Year5" ref={register} />{' '}Last 5 Year</label>
                    <label><input type="checkbox" name="Year10" ref={register} />{' '}Decade</label>
                    <label><input type="checkbox" name="All" ref={register} />{' '}All Time</label>
                    <input type="submit" value="go" />
                </div>
            
            </form>
            
        </div>
    )
}

export default Page3
