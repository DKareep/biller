import { UPDATE_TIP } from "../constants";

type TAction = {
  type: string;
  payload?: object | string | number;
};

type TInitialState = {
  tip: number | undefined;
};
const initialState: TInitialState = {
  tip: 10,
};

const tipReducer = (state: TInitialState = initialState, action: TAction) => {
  switch (action.type) {
    case UPDATE_TIP:
      return { ...state, tip: action.payload };
    default:
      return state;
  }
};

export default tipReducer;
