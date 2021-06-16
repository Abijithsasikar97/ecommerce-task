import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { addQuantity, removeProduct } from "../redux/action/cart";
import Image from "../shared/Image";
import Title from "../shared/Title";

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;

const CardWrapper = styled.div`
  padding: 5px 5px;
  float: left;
  width: 100%;
  padding: 5px;
`;

const Price = styled.h4`
  color: #daa520;
`;

const CartEmptyMess = styled.div`
  border: 1px solid;
  margin: 10px 0px;
  padding: 15px 10px 15px 50px;
  background-repeat: no-repeat;
  background-position: 10px center;
  color: #9f6000;
  background-color: #feefb3;
  background-image: url("https://i.imgur.com/Z8q7ww7.png");
`;

const Divider = styled.hr`
  border: 1px solid #ccc;
`;

const Total = styled.div`
  h1 {
    float: left;
    text-transform: uppercase;
    font-weight: unset;
  }
  span {
    float: right;
    font-size: 2em;
    margin-top: 0.67em;
    margin-bottom: 0.67em;
    margin-left: 0;
    margin-right: 0;
  }
`;

const QuantityBtn = styled.div`
  display: inline;
`;

const selectOption = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const CartList = ({ cartData, removeProduct, addQuantity }) => {
  const onSelect = (data, event) => {
    let quantity = {
      id: data.id,
      quantity: parseInt(event.target.value),
    };
    addQuantity(quantity);
  };

  const totalMoney = () => {
    let totalQt1 = cartData.reduce(
      (result, data) => result + data.price * data.quantity,
      0
    );
    return <span>${totalQt1}</span>;
  };

  return (
    <>
      {cartData.length > 0 ? (
        cartData.map((data) => {
          return (
            <React.Fragment key={data.id}>
              <ListWrapper>
                <CardWrapper>
                  <Image
                    imageUrl={data.image}
                    maxwidth="100px"
                    weight="100px"
                  />
                </CardWrapper>
                <CardWrapper>
                  <Title color={"#333"} content={data.title} />
                  <Price>${data.price * data.quantity}</Price>
                  <QuantityBtn>
                    <select
                      style={{ marginRight: "10px" }}
                      onChange={(e) => onSelect(data, e)}
                    >
                      {selectOption.map((data, i) => {
                        return (
                          <option key={i} value={data}>
                            {data}
                          </option>
                        );
                      })}
                    </select>
                  </QuantityBtn>
                  <button onClick={() => removeProduct(data)}>remove</button>
                </CardWrapper>
              </ListWrapper>
            </React.Fragment>
          );
        })
      ) : (
        <CartEmptyMess>Your cart is empty</CartEmptyMess>
      )}
      {cartData.length > 0 && (
        <>
          <Divider />
          <Total>
            <h1>total</h1>
            {totalMoney()}
          </Total>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  cartData: state.cartData,
});

const mapDispatchToProps = (dispatch) => ({
  removeProduct: (data) => dispatch(removeProduct(data)),
  addQuantity: (quantity) => dispatch(addQuantity(quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
