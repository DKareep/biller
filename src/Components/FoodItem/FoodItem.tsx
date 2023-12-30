import React from "react";
import { FoodItemDetails, FoodItemWrapper } from "./Styles/FoodItem";
import Button from "@atlaskit/button";
import TextField from "@atlaskit/textfield";
import { Label } from "@atlaskit/form";
type TProps = {
  id: number;
  name: string;
  price: number;
  quantity: number;

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
class FoodItem extends React.Component<TProps, any> {
  onPriceChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    this.props.increasePrice({ id, price: e.target.value });
  };
  onQuantityChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    this.props.increaseQuantity({ id, quantity: e.target.value });
  };

  onRemoveItem = (id: number) => {
    this.props.removeFoodItem(id);
  };
  render() {
    const { id, name, price, quantity } = this.props;
    return (
      <FoodItemWrapper>
        <h3>{name} </h3>
        <FoodItemDetails>
          <div className={"price-quantity"}>
            <div>
              <Label htmlFor={"item-price"}>Price</Label>
              <TextField
                id={"item-price"}
                value={price}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  this.onPriceChange(e, id)
                }
                type={"number"}
              />
            </div>
            <div>
              <Label htmlFor={"item-quantity"}>Quantity</Label>
              <TextField
                id={"item-quantity"}
                value={quantity}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  this.onQuantityChange(e, id)
                }
                type={"number"}
              />
            </div>
          </div>
          <div>
            <p>Total</p>
            <p>${(price * quantity).toFixed(2)}</p>
          </div>
        </FoodItemDetails>
        <div>
          <Button
            style={{ width: "100px", float: "right" }}
            appearance={"danger"}
            onClick={() => this.onRemoveItem(id)}
          >
            {" "}
            Remove
          </Button>
        </div>
      </FoodItemWrapper>
    );
  }
}

export default FoodItem;
