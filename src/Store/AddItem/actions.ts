import {
  ADD_NEW_FOOD_ITEM,
  INCREASE_PRICE,
  INCREASE_QUANTITY,
  REMOVE_ITEM,
} from "../constants";
import { TFoodItem } from "../../Components/AddItem/AddItem";

const addNewFoodItem = ({ foodItemName, foodItemPrice }: TFoodItem) => {
  return {
    type: ADD_NEW_FOOD_ITEM,
    payload: {
      foodItemName,
      foodItemPrice,
    },
  };
};

const increasePrice = ({ id, price }: { id: number; price: string }) => {
  return { type: INCREASE_PRICE, payload: { id, price } };
};

const increaseQuantity = ({
  id,
  quantity,
}: {
  id: number;
  quantity: string;
}) => {
  return { type: INCREASE_QUANTITY, payload: { id, quantity } };
};

const removeFoodItem = (id: number) => {
  return { type: REMOVE_ITEM, payload: id };
};

export { addNewFoodItem, increasePrice, increaseQuantity, removeFoodItem };
