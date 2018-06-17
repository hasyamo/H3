// RNRF logic here
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import NaviBar1 from './components/NaviBar1.js';
import NaviBar2 from './components/NaviBar2.js';
import GameList from './containers/gameList.js';
import EditGame from './containers/EditGame.js';
import moment from 'moment';
var ja = require('moment/locale/ja'); 
moment.updateLocale('ja', ja);

class AppNavigator extends Component{
  render(){
    return(
      <Router hideNavBar= "false">
        <Scene key="root">
          <Scene key="gameList"
                navBar={NaviBar1}
                component={GameList} title="H3" initial={true} />
          <Scene key="editGame"
                navBar={NaviBar2}
                component={EditGame}
                title={
                    moment(this.props.game.game.editDate).format("M月D日(ddd) ")} />
        </Scene>
      </Router>
    );
  }
}

export default connect(
    // mapStateToProps
    state => ({...state}),
    // mapDispatchToProps
    (dispatch) => ({ dispatch }),
    // mergeProps
    (stateProps, dispatchProps, ownProps)  => {
        const dispatch = dispatchProps.dispatch;
        return Object.assign({}, ownProps, stateProps, {
        });
    }
)(AppNavigator);
