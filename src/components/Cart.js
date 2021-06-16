import React from 'react';
import styled from 'styled-components';
import CartList from './CartList';

const Heading = styled.h1`
    border-bottom: 3px solid #00bfff;
    width: 80px;
`;


export const Cart = () => {
    return (
        <>
            <Heading>Cart</Heading>
            <CartList />
        </>
    )
}

export default Cart;
