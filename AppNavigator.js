// RNRF logic here
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import NaviBar1 from './components/NaviBar1.js';
import NaviBar2 from './components/NaviBar2.js';
import GameList from './containers/gameList.js';
import EditGame from './containers/EditGame.js';

export default class AppNavigator extends Component{
  render(){
    return(
      <Router hideNavBar= "false">
        <Scene key="root">
          <Scene key="gameList"
                navBar={NaviBar1}
                component={GameList} title="H3" initial={true} />
          <Scene key="editGame"
                navBar={NaviBar2}
                component={EditGame} title="Detail" />
        </Scene>
      </Router>
    );
  }
}
