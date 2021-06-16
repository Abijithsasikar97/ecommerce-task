import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Title from "../shared/Title";
import Image from "../shared/Image";
import { connect } from "react-redux";
import { addCart } from "../redux/action/cart";

const CardEle = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  background-color: #fff;
  white-space: nowrap;
  flex: 1 0 0;
  text-align: center;
`;

const Category = styled.h5`
  color: #72849a;
  text-align: left;
  margin: unset;
  text-transform: uppercase;
`;

const Price = styled.h4`
  color: #daa520;
`;

const ButtonEle = styled.button`
  background: #fff;
  border: 1px solid #00bfff;
  color: #00bfff;
  font-size: 16px;
  padding: 15px 32px;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #00bfff;
  }
  &:disabled,
  button[disabled] {
    color: #fff;
    background-color: #00bfff;
    cursor: not-allowed;
  }
`;

export const Card = ({ product, addCart, cartData }) => {

  const addProductToCart = () => {
    addCart(product);
  };

  const buttonfunc = () => {
    let enable = true;
    cartData.map((data) => {
      if(data.id === product.id) {
        enable = false;
      }
    });
    return (
      <ButtonEle disabled={!enable} onClick={() => addProductToCart()}>
        {enable ? `Add to Cart` : `Added to Cart`}
      </ButtonEle>
    );
  };

  return (
    <CardEle>
      <Category>{product.category}</Category>
      <Title color={"#00bfff"} content={product.title} />
      <Image maxwidth="100px" height="100px" imageUrl={product.image} />
      <Price>${product.price}</Price>
      {buttonfunc()}
    </CardEle>
  );
};

Card.prototype = {
  product: PropTypes.object,
};

const mapStateToProps = (state) => ({
  cartData: state.cartData,
});

const mapDispatchToProps = (dispatch) => ({
  addCart: (cartData) => dispatch(addCart(cartData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
