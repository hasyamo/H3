import React, {Component} from 'react';
import { View} from 'react-native';
import { connect } from 'react-redux';
import { gameActions } from '../modules/game';
import { ScoreBoard } from '../components/score_board';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";

export class GameList extends Component {
    onLayout() {
        console.info('onLayout');
    }
    render() {
        return (
            <Container onLayout={this.onLayout}>
                <ScoreBoard />
                <View>
                    <Text style={{marginTop: 200}}>{this.props.message}</Text>
                </View>
                <Button onPress={() => {this.props.onClickButton()} }>
                    <Text>test2</Text>
                </Button>
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
                console.info('hashimot');
                dispatch(gameActions.updateMessage('Hoge'));
            },
        });
    }
)(GameList);
