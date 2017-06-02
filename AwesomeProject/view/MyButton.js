
import React, {Component} from 'react';
import {
    Image,
    TouchableHighlight,
} from 'react-native';
//自定义button
export default class MyButton extends Component {
    render() {
        return (
            <TouchableHighlight
                underlayColor={this.props.bgColor}
                activeOpacity={0.5}
                onPress={this.props.onPress}
            >

                <Image
                    source={require('../img/ic_launcher.png')}
                    style={ {
                        width: this.props.imgWidth,
                        height: this.props.imgHeight
                    }}
                />
            </TouchableHighlight>
        )
    }
}