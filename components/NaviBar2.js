import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import { Colors } from '../constants'
import { Actions } from "react-native-router-flux";

const styles = {
    title: {
        color: Colors.green,
    },
    menu: {
        color: Colors.green,
        fontSize: 27
    },
    menuText: {
        color: Colors.green,
        marginBottom: 4,
        marginLeft: 4,
        fontSize: 16
    }
};
export default class NaviBar2 extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent
                        onPress={() => { Actions.pop() }}
                    >
                        <Icon style={styles.menu} name='ios-arrow-back' />
                        <Text style={styles.menuText}>Back</Text>
                    </Button>
                </Left>
                <Body>
                    <Title style={styles.title} >{this.props.title}</Title>
                </Body>
                <Right />
            </Header>
        );
    }
}

