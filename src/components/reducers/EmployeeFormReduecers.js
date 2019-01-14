import { EMPLOYEE_UPDATE } from "../actions/types";
const intial_state = {
  name: "",
  phone: "",
  shift: ""
};

export default (state = intial_state, action) => {
  console.log(action);
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
