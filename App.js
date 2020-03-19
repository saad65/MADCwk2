import React, { Component } from 'react';
import AppNavigator from "./AppNavigator.js"

/*
  Main App.js which alls AppNavigator file which is where all the screens are located
*/

export default class App extends Component {
  render() {
    return(
      <AppNavigator/>
    )
  }
}
