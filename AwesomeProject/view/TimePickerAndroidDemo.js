/**
  * Sample React Native App
  * https://github.com/facebook/react-native
  */
'use strict';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TimePickerAndroid,
    ToastAndroid,
    BackAndroid,
} from 'react-native';
import React, {Component} from 'react';
var count = 2;
//简单封装一个组件
class CustomButton extends Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor="#a5a5a5"
                onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}
export default  class TimePickerAndroidDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isoFormatText: 'pick a time (24-hour format)',
            presetHour: 4,
            presetMinute: 4,
            presetText: 'pick a time, default: 4:04AM',
            simpleText: 'pick a time',
        };
    }

    //组件挂载的时候调用
    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', function () {
            if (count >= 1) {
                ToastAndroid.show('收到点击返回键信息...' + count, ToastAndroid.SHORT);
                count--;
                return true;
            } else {
                return false;
            }
        });
    }

    //进行弹出时间选择器
    async showPicker(options) {
        try {
            const {action, minute, hour} = await TimePickerAndroid.open(options);
            if (action === TimePickerAndroid.timeSetAction) {
                ToastAndroid.show('选择的时间为:' + this._formatTime(hour, minute), ToastAndroid.SHORT);
            } else if (action === TimePickerAndroid.dismissedAction) {
                ToastAndroid.show('选择器关闭取消', ToastAndroid.SHORT);
            }
        } catch ({code, message}) {
            ToastAndroid.show('错误信息:' + message, ToastAndroid.SHORT);
        }
    }

    _formatTime(hour, minute) {
        return hour + ':' + (minute < 10 ? '0' + minute : minute);
    }

    render() {
        return (
            <View>
                <Text style={{margin: 10}}>
                    TimePickerAndroid实例
                </Text>
                <CustomButton
                    text="时间选择器-默认当前时间"
                    onPress={this.showPicker.bind(this)}
                />
                <CustomButton
                    text="时间选择器-指定时间:20:34"
                    onPress={this.showPicker.bind(this, {
                        hour: 20,
                        minute: 34,
                    })}
                />
                <CustomButton
                    text="时间选择器-指定时间以及时间制格式"
                    onPress={this.showPicker.bind(this, {
                        hour: 20,
                        minute: 34,
                        is24Hour: true,
                    })}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        margin: 5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    }
});
