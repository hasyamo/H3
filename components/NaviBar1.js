import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import { Colors } from '../constants'

const styles = {
    title: {
        color: Colors.green,
    },
    menu: {
        color: Colors.green,
        fontSize: 24
    }
};
export default class NaviBar1 extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent>
                        <Icon style={styles.menu} name='menu' />
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

