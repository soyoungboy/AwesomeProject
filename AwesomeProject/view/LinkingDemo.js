/**
  * React Native For Android端进行根据URL打开系统的应用
  * https://github.com/facebook/react-native
  */
import  {
    StyleSheet,
    Text,
    View,
    Linking,
    TouchableHighlight,
} from 'react-native';
import React, {Component} from 'react';
class CustomButton extends Component {
    constructor(props) {
        super(props);
    }

    propTypes: {
        url: React.PropTypes.string,
    }

    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor="#a5a5a5"
                onPress={() => Linking.canOpenURL(this.props.url).then(supported => {
                    if (supported) {
                        Linking.openURL(this.props.url);
                    } else {
                        console.log('无法打开该URI: ' + this.props.url);
                    }
                })}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}
export default  class LinkingDemo extends Component {
    componentDidMount() {
        var url = Linking.getInitialURL().then((url) => {
            if (url) {
                console.log('捕捉的URL地址为: ' + url);
            }
        }).catch(err => console.error('错误信息为:', err));
    }

    render() {
        return (
            <View>
                <CustomButton url={'http://www.lcode.org'} text="点击打开http网页"/>
                <CustomButton url={'https://www.baidu.com'} text="点击打开https网页"/>
                <CustomButton url={'smsto:18352402477'} text="点击进行发送短信"/>
                <CustomButton url={'tel:18352402477'} text="点击进行打电话"/>
                <CustomButton url={'mailto:jiangqqlmj@163.com'} text="点击进行发邮件"/>
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
    },
});