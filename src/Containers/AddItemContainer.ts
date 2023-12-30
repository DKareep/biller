import { connect } from "react-redux";
import AddItem, { TFoodItem } from "../Components/AddItem/AddItem";
import {
  addNewFoodItem,
  increasePrice,
  increaseQuantity,
  removeFoodItem,
} from "../Store/AddItem/actions";

const mapStateToProps = (state: any) => {
  return {
    items: state.itemState.items,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addNewFoodItem: ({ foodItemName, foodItemPrice }: TFoodItem) =>
      dispatch(addNewFoodItem({ foodItemName, foodItemPrice })),
    increasePrice: ({ id, price }: { id: number; price: string }) => {
      dispatch(increasePrice({ id, price }));
    },

    increaseQuantity: ({ id, quantity }: { id: number; quantity: string }) => {
      dispatch(increaseQuantity({ id, quantity }));
    },

    removeFoodItem: (id: number) => {
      dispatch(removeFoodItem(id));
    },
  };
};

const AddItemContainer = connect(mapStateToProps, mapDispatchToProps)(AddItem);
export default AddItemContainer;
