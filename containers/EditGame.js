import React, {Component} from 'react';
import { StyleSheet, View, TouchableHighlight, Image, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { gameActions } from '../modules/game';
import { ScoreBoard } from '../components/score_board';
import H3List from '../components/H3List';
import { Colors } from '../constants';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Form, Text, Item, Input, Label } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';


const styles = {
    header: {
        backgroundColor: Colors.green
    },
    icon: {
        width:32, height:32
    },
    iconMin: {
        width:24,
        height:24
    },
    btn:{
        borderColor: Colors.gray,
        backgroundColor:Colors.white,
        marginRight:4,
        marginLeft:4,
        marginTop:4,
        paddingTop:4,
        paddingBottom:4,
        borderRadius:8,
        borderWidth: 1,
        height: 52,
    },
    submitText:{
        color: Colors.gray,
        fontWeight: 'bold',
        textAlign:'center',
        fontSize:12
    },
    btnSelected: {
        borderColor: Colors.green,
        backgroundColor:Colors.green,
        opacity: 1.0
    },
    txtSelected: {
        color: Colors.white,
    }
};

class Images {
  static win  = require("../assets/iconWin.png");
  static lose = require("../assets/iconLose.png");
  static winGray  = require("../assets/iconWinGray.png");
}

class WinnerButton extends Component {

  render() {
    var winner = this.props.name;
    var css1 = [styles.btn];
    var css2 = [styles.submitText];
    var winIcon = Images.winGray;
    if (this.props.game.winner == winner) {
      css1.push(styles.btnSelected)
      css2.push(styles.txtSelected)
      winIcon = Images.win;
    } else {
      css1.push(styles.btnUnSelected)
    }
    return (
      <TouchableHighlight
        style={css1}
        onPress={() => this.props.onPress()}
        underlayColor='#fff'>
        <View style={{flexDirection: "column", alignItems: "center" }}>
        <Image source={winIcon} style={styles.iconMin} />
          <Text style={css2}>{winner}</Text>
        </View>
      </TouchableHighlight>

    );
  }
}


export class EditGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.game.title,
            point: props.game.point,
            winner: props.game.winner,
        };
    }
 
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>何を勝負しましたか？</Label>
                            <Input
                                value={this.state.title}
                                onChangeText={ (value) => {this.setState({'title': value})}}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>いくつの点数を掛けて勝負しましたか？</Label>
                            <Input keyboardType="numeric"
                                onChangeText={ (value) => {this.setState({'point': value})}}/>
                        </Item>

                        <Grid style={{marginTop:24, paddingLeft:16, paddingRight:16}}>
                            <Row>
                                <Col>
                                    <Label style={{color: '#636263', textAlign:'left'}}>どちらが勝ちましたか？</Label>
                                </Col>
                            </Row>
                            <Row style={{marginTop:4}}>
                                <Col>
                                    <WinnerButton {...this.props}
                                        name="Hashimoto"
                                        onPress={() => {this.props.onSelectWinner('Hashimoto')}}/>
                                </Col>
                                <Col>
                                    <WinnerButton {...this.props}
                                        name="Hiraike"
                                        onPress={() => {this.props.onSelectWinner('Hiraike')}}/>
                                </Col>
                            </Row>

                        </Grid>
                    </Form>
                </Content>
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
        console.info(stateProps);
        return Object.assign({}, ownProps, stateProps, {
            onChangeData: (key, value) => {
                dispatch(gameActions.changeGameData(key, value));
            },
            onSelectWinner: (winner) => {
                dispatch(gameActions.selectWinner(winner));
            }
        });
    }
)(EditGame);
