import React from "react";
import { Wrapper } from "../../Pages/Styles/Billing";
import Select from "@atlaskit/select";

import { TotalWrapper, FinalAmount } from "./Styles/Tip";
import { SingleValue } from "react-select";
import { Label } from "@atlaskit/form";

interface Option {
  label: string;
  value: number;
}

type Props = {
  updateTip: (tip: number) => {};
  tip: any;
  total: number;
  subtotal: number;
  tipAmount: number;
};
type State = {};
const tipPercentage = [
  { label: "10%", value: 10 },
  { label: "20%", value: 20 },
  { label: "30%", value: 30 },
];

class Tip extends React.Component<Props, State> {
  onTipChange = (option: SingleValue<Option>) => {
    if (option?.value) {
      this.props.updateTip(option.value);
    }
  };

  render() {
    return (
      <Wrapper>
        <>
          <FinalAmount>
            <Label htmlFor={"tip"}>How much you want to tip?</Label>
            <Select<Option>
              options={tipPercentage}
              defaultValue={tipPercentage[0]}
              value={this.props.tip}
              isClearable
              onChange={(option) => this.onTipChange(option)}
              id={"tip"}
            />

            <TotalWrapper>
              <div className="total-container">
                <div className={"sub-total"}>
                  <h4>Subtotal</h4>
                  <p>{this.props.subtotal.toFixed(2)}</p>
                </div>
                <div className={"tip"}>
                  <h4>Tip</h4>
                  <p>{this.props.tipAmount.toFixed(2)}</p>
                </div>{" "}
                <div className={"total"}>
                  <h4>Total</h4>
                  <p>{this.props.total.toFixed(2)}</p>
                </div>
              </div>
            </TotalWrapper>
          </FinalAmount>
        </>
      </Wrapper>
    );
  }
}

export default Tip;
