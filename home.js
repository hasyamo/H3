import React, {Component} from 'react';
import { View, Text, Button} from 'react-native';
import { connect } from 'react-redux';
import { activateH3, closeH3 } from './redux'

export class Home extends Component {
    render() {
        return (
            <View>
            <Text style={{marginTop: 200}}>{this.props.h3.title || '成功!'}</Text>
            {this.props.h3.title ?
                <Button
                onPress={this.props.closeH3}
                title="Click me"
                color="#841584"

                /> :
                    <Button
                    onPress={() => this.props.activateH3({ title: '私の名前はカバヤです' })}
                    title="Click me"
                    color="#841584"

                    accessibilityLabel="Learn more about this purple button"
                    />
            }
            </View>
        );
    }
}

const mapStateToProps = state => ({
    // storeは巨大なJsonの塊なので、kabayaにjsonから取って来たデータを代入している。 
    h3: state.h3,
});

const mapDispatchToProps = {  
  // action creatorの名前が入っている。
  activateH3,
  closeH3,
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default Container;

