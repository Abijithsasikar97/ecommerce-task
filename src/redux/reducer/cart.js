const initState = {
    cartData: [],
}

export const addToCart = (state = initState, action) => {
    switch (action.type) {
        case "ADD_CART":
            return {
                ...state,
                cartData: state.cartData.concat(action.payload),
                removed: false
            };
        case "REMOVE_PRODUCT":
            return {
                ...state,
                cartData: state.cartData.filter(data => data.id !== action.payload.id),
            };
        case "ADD_QUANTITY":
            let item = state.cartData.find(data => data.id == action.payload.id);
            let newCartData = state.cartData.filter(data => data.id !== action.payload.id)
            item.quantity = action.payload.quantity;
            newCartData.push(item);
            return {
                ...state,
                cartData: newCartData
            }
        default:
            return state;
    }
};