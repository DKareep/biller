import {
  ADD_NEW_FOOD_ITEM,
  INCREASE_PRICE,
  INCREASE_QUANTITY,
  REMOVE_ITEM,
} from "../constants";

type Action = {
  type: string;
  payload?: any;
};
let id = 1;

export type TItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};
type TInitialState = {
  items: TItem[];
};
const initialState: TInitialState = {
  items: [
    { id: id++, name: "Pizza", price: 11, quantity: 1 },
    { id: id++, name: "Fries", price: 8, quantity: 1 },
  ],
};

const itemReducer = (state: TInitialState = initialState, action: Action) => {
  switch (action.type) {
    case ADD_NEW_FOOD_ITEM:
      let item = {
        id: id++,
        name: action.payload.foodItemName,
        price: action.payload.foodItemPrice,
        quantity: 1,
      };
      return { ...state, items: [...state.items, item] };
    case REMOVE_ITEM:
      let items = state.items?.filter((item) => item.id !== action.payload);
      return { ...state, items: items };
    case INCREASE_PRICE:
      let updateItemsWithPrice = state.items?.map((item) => {
        if (item.id === action.payload?.id) {
          return { ...item, price: action.payload.price };
        }
        return item;
      });
      return { ...state, items: updateItemsWithPrice };
    case INCREASE_QUANTITY:
      let updateItemsWithQuantity = state.items?.map((item) => {
        if (item.id === action.payload?.id) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });
      return { ...state, items: updateItemsWithQuantity };
    default:
      return state;
  }
};

export default itemReducer;
