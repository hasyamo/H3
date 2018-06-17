import React, {Component} from 'react';
import { View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { gameActions } from '../modules/game';
import { ScoreBoard } from '../components/score_board';
import H3List from '../components/H3List';
import { Colors } from '../constants';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Fab } from "native-base";

export class EditGame extends Component {
    render() {
        return (
            <Container>
            <Text>hoge</Text>
            </Container>
        );
    }
}

export default connect(
    // mapStateToProps
    state => ({...state.game}),
    // mapDispatchToProps
    (dispatch) => ({ dispatch }),
    // mergeProps
    (stateProps, dispatchProps, ownProps)  => {
        const dispatch = dispatchProps.dispatch;
        return Object.assign({}, ownProps, stateProps, {
        });
    }
)(EditGame);
