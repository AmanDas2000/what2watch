export const initialState = {
    basket: []
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'add':
            return {
                ...state,
                basket: [...state.basket, action.id]
            }
            break;
        case 'remove':
			 
                let newBasket=[...state.basket];
                const index=state.basket.findIndex((basketItem)=>basketItem===action.id);
                    if(index>=0){
                      newBasket.splice(index, 1);
                    } else{
                      console.warn('not found');
                    }
           
           return {...state, basket: newBasket};
           
           break;
        default:
            return state;
    }
}

export default reducer;