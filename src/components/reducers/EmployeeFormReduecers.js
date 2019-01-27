import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from "../actions/types";
const intial_state = {
  name: "",
  phone: "",
  shift: "Monday"
};

export default (state = intial_state, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
      return intial_state;
    default:
      return state;
  }
};
