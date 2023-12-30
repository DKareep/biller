import React, { ChangeEvent } from "react";
import { Label } from "@atlaskit/form";
import { Wrapper, ItemsWrapper } from "../../Pages/Styles/Billing";
import FoodItem from "../FoodItem/FoodItem";
import { TItem } from "../../Store/AddItem";
import Button from "@atlaskit/button";
import TextField from "@atlaskit/textfield";

export type TFoodItem = {
  foodItemName: string;
  foodItemPrice: number;
};

type TProps = {
  items: TItem[];
  addNewFoodItem: ({ foodItemName, foodItemPrice }: TFoodItem) => void;
  increasePrice: ({ id, price }: { id: number; price: string }) => void;
  increaseQuantity: ({
    id,
    quantity,
  }: {
    id: number;
    quantity: string;
  }) => void;
  removeFoodItem: (id: number) => void;
};

type TState = {
  foodItemName: string;
  foodItemPrice: number;
};

class AddItem extends React.Component<TProps, TState> {
  constructor(props: any) {
    super(props);
    this.state = {
      foodItemName: "Burger",
      foodItemPrice: 10,
    };
  }

  onAddItem = () => {
    this.props.addNewFoodItem({
      foodItemName: this.state.foodItemName,
      foodItemPrice: this.state.foodItemPrice,
    });
  };
  render() {
    const { increasePrice, increaseQuantity, removeFoodItem } = this.props;

    return (
      <Wrapper>
        <Label htmlFor="food-item">Food Item</Label>
        <TextField
          id={"food-item"}
          label="Food item"
          value={this.state.foodItemName}
          onChange={(e: ChangeEvent<any>) =>
            this.setState({ foodItemName: e.target.value })
          }
          type={"text"}
          isRequired
        />
        <Label htmlFor="price">Price</Label>
        <TextField
          id={"price"}
          onChange={(e: ChangeEvent<any>) =>
            this.setState({ foodItemPrice: e.target.value })
          }
          value={this.state.foodItemPrice}
          type={"number"}
          isRequired
        />

        <br />
        <Button appearance={"primary"} onClick={() => this.onAddItem()}>
          Add{" "}
        </Button>
        <ItemsWrapper>
          {this.props.items?.map((item, index) => {
            return (
              <FoodItem
                key={item.id + index}
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                increasePrice={increasePrice}
                increaseQuantity={increaseQuantity}
                removeFoodItem={removeFoodItem}
              />
            );
          })}
        </ItemsWrapper>
      </Wrapper>
    );
  }
}

export default AddItem;
