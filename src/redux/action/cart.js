export const addCart = cartData => ({
    type: 'ADD_CART',
    payload: cartData
})

export const removeProduct = data => ({
    type: 'REMOVE_PRODUCT',
    payload: data
})

export const addQuantity = quantity => ({
    type: 'ADD_QUANTITY',
    payload: quantity
})
