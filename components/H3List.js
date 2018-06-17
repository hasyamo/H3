import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableHighlight, FlatList, Image } from 'react-native';
import { Colors, FontSize } from '../constants'
import moment from 'moment';

var ja = require('moment/locale/ja'); 
moment.updateLocale('ja', ja);
  
const styles = {
    icon: {
        width:32, height:32
    },
    item: {
        height: 78,
        padding:4,
    },
    itemHead: {
        flexDirection: 'row',
        alignItems: 'center',
        height:18,
    },
    itemDate: {
        color: Colors.brown,
        fontSize: FontSize.min
    },
    itemTitle:{
        color: 'gray',
        fontSize: 12
    },
    itemEven: {
        backgroundColor: '#fff'
    },
    itemOdd: {
        backgroundColor: '#F0EFE9'
    },
    itemWinLoose: {
        flexDirection: 'row',
        height:54
    },
    itemWinLooseItem: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent:'center'
    }
};

class Images {
  static win  = require("../assets/iconWin.png");
  static lose = require("../assets/iconLose.png");
  static winGray  = require("../assets/iconWinGray.png");
}

class H3Item extends Component {
    render() {
        return (
    <TouchableHighlight
        onPress={() => {}} >
        <View style={[styles.item, this.props.index % 2 == 0 ? styles.itemEven : styles.itemOdd]}>
            <View style={styles.itemHead}>
                <View style={{flex:3}}>
                    <Text style={styles.itemDate}>
                        {moment(this.props.data.date).format("M月D日 ddd HH:mm")}
                    </Text>
                </View>
                <View style={{flex:7}}>
                    <Text style={styles.itemTitle}>ほにゃららの勝負</Text>
                </View>
            </View>
            <View style={styles.itemWinLoose}>
                <View style={styles.itemWinLooseItem}>
                    <Image source={Images.lose} style={styles.icon} />
                </View>
                <View style={styles.itemWinLooseItem}>
                    <Image source={Images.win}  style={styles.icon} />
                    <Text style={styles.point}>+30</Text>
                </View>
            </View>
        </View>
    </TouchableHighlight>
        );
    }
}


export default class H3List extends Component {
    render() {
        var items = [
          { key: '1', date: '2017-01-01 09:00:00' },
          { key: '2', date: '2017-01-02 09:00:00' },
          { key: '3', date: '2017-01-03 09:00:00' },
          { key: '4', date: '2017-01-04 09:00:00' },
          { key: '5', date: '2017-01-05 09:00:00' },
          { key: '6', date: '2017-01-06 09:00:00' },
          { key: '7', date: '2017-01-07 09:00:00' },
          { key: '8', date: '2017-01-08 09:00:00' },
          { key: '9', date: '2017-01-09 09:00:00' },
          { key: '10', date: '2017-01-10 09:00:00' },
        ];
        return (
            <FlatList
                style={{height:300/*flex:0.65*/}}
                data={items}
                renderItem={({ item, index }) => <H3Item {...this.props} data={item} index={index} /> }
            />
        );
    }
}

