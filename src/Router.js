import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import CreateEmployee from "./components/EmployeeCreate";
export const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar={true}>
        <Scene key="auth">
          <Scene
            title="Login"
            key="login"
            component={LoginForm}
            initial={true}
          />
        </Scene>
        <Scene key="main">
          <Scene
            title="Employee"
            key="employeeList"
            component={EmployeeList}
            rightTitle="Add"
            onRight={() => Actions.createEmployee()}
          />
          <Scene
            title="Create Employee"
            key="createEmployee"
            component={CreateEmployee}
          />
        </Scene>
      </Scene>
    </Router>
  );
};
