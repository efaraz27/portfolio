import { SWITCH_MODE } from "./type";

const initialState = {
  dark: true
};

const modeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_MODE:
      return {
        ...state,
        dark: !state.dark
      };
    default:
      return state;
  }
};

export default modeReducer;