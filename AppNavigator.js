// RNRF logic here
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import NaviBar from './components/navibar.js';
import GameList from './containers/gameList.js';

export default class AppNavigator extends Component{
  render(){
    return(
      <Router hideNavBar= "false">
        <Scene key="root">
          <Scene key="gameList"
                navBar={NaviBar}
                component={GameList} title="H3" initial={true} />
        </Scene>
      </Router>
    );
  }
}
