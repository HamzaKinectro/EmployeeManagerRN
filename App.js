import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import firebase from "firebase";
import reducers from "./src/components/reducers";
import LoginForm from "./src/components/LoginForm";
import { Header } from "./src/components/commons";
import ReduxThunk from "redux-thunk";
import { RouterComponent } from "./src/Router";

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyBCZ9J62J_AygaI-j1eIby3vCMIn8GNMXs",
      authDomain: "employee-af0fe.firebaseapp.com",
      databaseURL: "https://employee-af0fe.firebaseio.com",
      projectId: "employee-af0fe",
      storageBucket: "employee-af0fe.appspot.com",
      messagingSenderId: "1011415076034"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
