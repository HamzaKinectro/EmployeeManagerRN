import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import EmployeeFormReducer from "./EmployeeFormReduecers";
import EmployeeReducer from "./EmployeeReducer";

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer,
  employees: EmployeeReducer
});
