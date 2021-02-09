import React from 'react';
import { useForm } from "react-hook-form";
import { useStateValue } from './StateProvider';
import Row from './Row';
import requests from './request';
import './Page2.css';
import { Link } from 'react-router-dom';

function Page2() {
    
    const { register, handleSubmit } = useForm();

    
    const [{ basket }, dispatch] = useStateValue();
    
    let base = '&with_genres=';
    let action = '28,';
    let adventure = '12,';
    let animation = '16,';
    let comedy = '35,';
    let crime = '80,';
    let doc = '99,';
    let drama = '18,';
    let family = '10751,';
    let fantasy = '14,';
    let hist = '36,';
    let horror = '27,';
    let music = '10402,';
    let mystery = '9648,';
    let rom = '10749,';
    let scifi = '878,';
    let tvmovie = '10770,';
    let thriller = '53,';
    let war = '10752,';
    let west = '37,';



    const addToBasket = (x) => {
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
        
        addToBasket(base);
        switch (data.Action) {
            case true: addToBasket(action);
                break;
            case false: removeFromBasket(action);
                break;
        }
        switch (data.Adventure) {
            case true: addToBasket(adventure);
                break;
            case false: removeFromBasket(adventure);
                break;
        }
        switch (data.Animation) {
            case true: addToBasket(animation);
                break;
            case false: removeFromBasket(animation);
                break;
        }
        switch (data.Comedy) {
            case true: addToBasket(comedy);
                break;
            case false: removeFromBasket(comedy);
                break;
        }
        switch (data.Crime) {
            case true: addToBasket(crime);
                break;
            case false: removeFromBasket(crime);
                break;
        }
        switch (data.Doc) {
            case true: addToBasket(doc);
                break;
            case false: removeFromBasket(doc);
                break;
        }
        switch (data.Drama) {
            case true: addToBasket(drama);
                break;
            case false: removeFromBasket(drama);
                break;
        }
        switch (data.Family) {
            case true: addToBasket(family);
                break;
            case false: removeFromBasket(family);
                break;
        }
        switch (data.Fantasy) {
            case true: addToBasket(fantasy);
                break;
            case false: removeFromBasket(fantasy);
                break;
        }
        switch (data.Fantasy) {
            case true: addToBasket(fantasy);
                break;
            case false: removeFromBasket(fantasy);
                break;
        }
        switch (data.Hist) {
            case true: addToBasket(hist);
                break;
            case false: removeFromBasket(hist);
                break;
        }
        switch (data.Horror) {
            case true: addToBasket(horror);
                break;
            case false: removeFromBasket(horror);
                break;
        }
        switch (data.Music) {
            case true: addToBasket(music);
                break;
            case false: removeFromBasket(music);
                break;
        }
        switch (data.Mystery) {
            case true: addToBasket(mystery);
                break;
            case false: removeFromBasket(mystery);
                break;
        }
        switch (data.Rom) {
            case true: addToBasket(rom);
                break;
            case false: removeFromBasket(rom);
                break;
        }
        switch (data.Scifi) {
            case true: addToBasket(scifi);
                break;
            case false: removeFromBasket(scifi);
                break;
        }
        switch (data.Tvmovie) {
            case true: addToBasket(tvmovie);
                break;
            case false: removeFromBasket(tvmovie);
                break;
        }
        switch (data.Thriller) {
            case true: addToBasket(thriller);
                break;
            case false: removeFromBasket(thriller);
                break;
        }
        switch (data.War) {
            case true: addToBasket(war);
                break;
            case false: removeFromBasket(war);
                break;
        }
        switch (data.West) {
            case true: addToBasket(west);
                break;
            case false: removeFromBasket(west);
                break;
        }
    } 
    
    
    return (
        
        <div >
            <form className="check" onSubmit={handleSubmit(onSubmit)}>
                
                <div className="check1">
                <label><input type="checkbox" name="Action" ref={register} />{' '}Action</label>
                <label><input type="checkbox" name="Adventure" ref={register} />{' '}Adventure</label>  
                <label><input type="checkbox" name="Animation" ref={register} />{' '}Animation</label>
                <label><input type="checkbox" name="Comedy" ref={register} />{' '}Comedy</label>
                <label><input type="checkbox" name="Crime" ref={register} />{' '}Crime</label>
                </div>
                <div className="check1">
                <label><input type="checkbox" name="Doc" ref={register} />{' '}Documentary</label>
                <label><input type="checkbox" name="Drama" ref={register} />{' '}Drama</label>
                <label><input type="checkbox" name="Family" ref={register} />{' '}Family</label>
                <label><input type="checkbox" name="Fantasy" ref={register} />{' '}Fantasy</label>
                <label><input type="checkbox" name="Hist" ref={register} />{' '}History</label>              
                </div>
                <div className="check1">
                <label><input type="checkbox" name="Music" ref={register} />{' '}Music</label>
                <label><input type="checkbox" name="Mystery" ref={register} />{' '}Mystery</label>
                <label><input type="checkbox" name="Rom" ref={register} />{' '}Romance</label>
                <label><input type="checkbox" name="Scifi" ref={register} />{' '}Sci-Fi</label>
                <label><input type="checkbox" name="Tvmovie" ref={register} />{' '}T V movie</label>
                </div>
                <div className="check1">
                <label><input type="checkbox" name="Thriller" ref={register} />{' '}Thriller</label>
                <label><input type="checkbox" name="War" ref={register} />{' '}War</label>
                <label><input type="checkbox" name="West" ref={register} />{' '}Western</label>
                </div>
                <div className="check1">
                <input type="submit" value="go" />
                </div>
                    
                    
            </form>
            
        </div>
    )
}

export default Page2
