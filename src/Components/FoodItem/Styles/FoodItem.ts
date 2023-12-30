import styled from "styled-components";

export const FoodItemWrapper = styled.section`
  margin: 10px auto;
  height: 240px;
  border: 1px solid lightgray;
  display: flex;
  width: 580px;
  max-width: 100%;
  align-content: center;
  flex-direction: column;
  padding: 20px 40px;
  box-sizing: border-box;
`;

export const FoodItemDetails = styled.section`
  display: flex;
  justify-content: space-between;
  div.price-quantity {
    display: flex;
    width: 40%;
    justify-content: space-evenly;
    column-gap: 10px;
    div {
      flex-basis: 100px;
    }
  }
`;
