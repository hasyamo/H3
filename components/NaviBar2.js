import React, {Component} from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, TouchableHighlight  } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text} from "native-base";
import { Colors } from '../constants'
import { Actions } from "react-native-router-flux";
import { DatePicker } from './H3DatePicker'

import moment from 'moment';
var ja = require('moment/locale/ja'); 
moment.updateLocale('ja', ja);

const styles = {
    root: {
        backgroundColor: Colors.green,
    },
    title: {
        color: Colors.white,
    },
    menu: {
        color: Colors.white,
        fontSize: 27
    },
    menuText: {
        color: Colors.white,
        marginBottom: 4,
        marginLeft: 4,
        fontSize: 16
    },
    datePickerText: {
        color: Colors.white,
    }
};
class NaviBar2 extends Component {
    render() {
        return (
            <Header style={styles.root} >
                <Left>
                    <Button transparent
                        onPress={() => { Actions.pop() }}
                    >
                        <Icon style={styles.menu} name='ios-arrow-back' />
                        <Text style={styles.menuText}>Back</Text>
                    </Button>
                </Left>
                <Body>
                    <DatePicker
                        defaultDate={moment(this.props.game.game.editDate).toDate()}
                        locale={"ja"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={true}
                        animationType={"slide"}
                        androidMode={"default"}
                        format="M月D日 HH:mm"
                        textStyle={styles.datePickerText}
                        placeHolderTextStyle={styles.datePickerText}
                        mode="datetime"
                        placeHolderText={moment(this.props.game.game.editDate).format("M月D日 HH:mm")}
                    />
                </Body>
                <Right>
                    <Button transparent
                        onPress={() => { Actions.pop() }}
                    >
                        <Text style={styles.menuText}>Save</Text>
                    </Button>
                </Right>

            </Header>
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
)(NaviBar2);
