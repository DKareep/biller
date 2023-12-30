import { UPDATE_TIP } from "../constants";

export const updateTip = (tip: number) => {
  return {
    type: UPDATE_TIP,
    payload: tip,
  };
};
