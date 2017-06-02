import React, {Component} from 'react';
import {
    Text,
    View,
    ProgressBarAndroid,
} from 'react-native';

export default class Third_screen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'third',
    };

    render() {
        return <View >
            <Text>
                ProgressBarAndroid控件实例
            </Text>
            <ProgressBarAndroid color="red" styleAttr='Inverse'/>
            <ProgressBarAndroid color="green" styleAttr='Horizontal' progress={0.2}
                                indeterminate={false} style={{marginTop: 10}}/>
            <ProgressBarAndroid color="green" styleAttr='Horizontal'
                                indeterminate={true} style={{marginTop: 10}}/>
            <ProgressBarAndroid color="black" styleAttr='SmallInverse'
                                style={{marginTop: 10}}/>
            <ProgressBarAndroid styleAttr='LargeInverse'
                                style={{marginTop: 10}}/>
        </View>
    }
}