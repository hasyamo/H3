import React, {Component} from 'react';
import { StyleSheet, View, Text,TouchableHighlight } from 'react-native';
import { Colors } from '../constants'

const styles = {
  container: {
    height:120,
    flexDirection: 'row',
    backgroundColor: Colors.green
  },
  item: {
    flex:0.5,
    justifyContent:'center',
    alignItems:'center',
  },
  point: {
    fontSize:76,
    color:'#fff',
  },
  name: {
    fontSize:12,
    color:'#fff',
  },
}

export class ScoreBoard extends Component {
    render() {
        return (
            <TouchableHighlight style={{height:120}} onPress={() => {}}>
                <View style={styles.container} >
                    <View style={styles.item}>
                        <Text style={styles.point}>30</Text>
                        <Text style={styles.name}>Hashimoto</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.point}>200</Text>
                        <Text style={styles.name}>Hiraike</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}


