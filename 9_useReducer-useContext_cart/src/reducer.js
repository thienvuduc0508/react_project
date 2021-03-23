
const reducer = (state, action) => {
    const {type, payload} = action;
    if(type === 'CLEAR_CART'){
        return {
            ...state,
             cart: []};
    }
    if(type === 'REMOVE'){
        return {
            ...state, 
            cart: state.cart.filter( cartItem => cartItem.id !== payload)
        }
    }
    if(type === 'INCREASE'){
        let tempCart = state.cart.map( (cartItem) => {
            if(cartItem.id === payload) {
                return {...cartItem, amount: cartItem.amount + 1};
            }
                return cartItem;                     
        })

        return { ...state, cart: tempCart}     
    }
    if(type === 'DECREASE'){
        
        let tempCart = state.cart.map( (cartItem) => {  
            if(cartItem.id === payload) {
                return {...cartItem, amount: cartItem.amount - 1};
            }
                return cartItem;                     
        }).filter(cartItem => cartItem.amount !== 0) // trả về 1 mảng cart có số lượng > 0

        return { ...state, cart: tempCart}     
    }
    if(type==='GET_TOTALS'){
        let {total, amount} = state.cart.reduce((cartTotal,cartItem) => {
            const { price, amount } = cartItem;
            const itemTotal = price*amount;

            cartTotal.total +=itemTotal
            cartTotal.amount += amount
            return cartTotal
        }, {
            total: 0,
            amount: 0,
        })

        total = parseFloat(total.toFixed(2))

        return {...state, total, amount}
    }

    return state
}

export default reducer;