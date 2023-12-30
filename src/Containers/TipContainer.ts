import { connect } from "react-redux";
import Tip from "../Components/Tip/Tip";
import { updateTip } from "../Store/Tip/actions";

const mapStateToProps = (state: any) => {
  const items = state.itemState.items;
  let subtotal = 0;
  for (const item of items) {
    subtotal += item.price * item.quantity;
  }
  const tipAmount = subtotal * (state.tipState.tip / 100);
  let total = subtotal + tipAmount;

  return {
    tip: state.tip,
    subtotal,
    tipAmount,
    total,
  };
};
const mapDispatchToProps = (
  dispatch: (arg0: { type: string; payload: {} }) => any,
) => {
  return {
    updateTip: (tip: number) => dispatch(updateTip(tip)),
  };
};

const TipContainer = connect(mapStateToProps, mapDispatchToProps)(Tip);
export default TipContainer;
