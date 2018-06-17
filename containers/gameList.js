import React, {Component} from 'react';
import { View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { gameActions } from '../modules/game';
import { ScoreBoard } from '../components/score_board';
import H3List from '../components/H3List';
import { Colors } from '../constants';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Fab } from "native-base";
import { Actions } from "react-native-router-flux";

export class GameList extends Component {
    render() {
        return (
            <Container>
                <ScoreBoard />
                <H3List />
                <Fab
                    active={true}
                    containerStyle={{ }}
                    style={{ backgroundColor: Colors.green }}
                    position="bottomRight"
                    onPress={() => {this.props.onAdd()}}>
                    <Icon type="Feather" name="plus" />
                </Fab>
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
            onClickButton: () => {
                dispatch(gameActions.updateMessage('Hoge'));
            },
            onAdd: () => {
                dispatch(gameActions.newGame());
                Actions.editGame();
            }
        });
    }
)(GameList);
