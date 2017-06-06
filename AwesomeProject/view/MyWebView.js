/**
 * Created by quanyan on 2017/6/2.
 */
import React,{Component} from 'react';
import {View, Text, StyleSheet, WebView, InteractionManager, Share, TouchableHighlight} from 'react-native';

export default class MyWebView extends Component{
    static navigationOptions = ({navigation}) => ({
        headerStyle:{ backgroundColor:'white'},
    });
    state:{
        source:Object
    }
    constructor(props:Object){
        super(props)

        this._shareMessage = this._shareMessage.bind(this);
        this._shareText = this._shareText.bind(this);
        this._showResult = this._showResult.bind(this);
        this.state = {
            result: ''
        };

        this.state = {
            source:{}
        }
    }

    _shareMessage() {
        Share.share({
            message: '我是被分享的本文信息'
        })
            .then(this._showResult)
            .catch((error) => this.setState({result: 'error: ' + error.message}));
    }

    _shareText() {
        Share.share({
            message: '我是被分享的本文信息',
            url: 'http://www.lcode.org',
            title: 'React Native'
        }, {
            dialogTitle: '分享博客地址',
            excludedActivityTypes: [
                'com.apple.UIKit.activity.PostToTwitter'
            ],
            tintColor: 'green'
        })
            .then(this._showResult)
            .catch((error) => this.setState({result: 'error: ' + error.message}));
    }

    _showResult(result) {
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                this.setState({result: 'shared with an activityType: ' + result.activityType});
            } else {
                this.setState({result: 'shared'});
            }
        } else if (result.action === Share.dismissedAction) {
            this.setState({result: 'dismissed'});
        }
    }


    componentDidMount(){
        InteractionManager.runAfterInteractions(()=>{
            this.setState({ source: { uri: 'https://news.baidu.com/news#/?_k=ccgrpa' } })
        })
    }

    render(){
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.wrapper}
                                    onPress={this._shareMessage}>
                    <View style={styles.button}>
                        <Text>点击分享文本</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper}
                                    onPress={this._shareText}>
                    <View style={styles.button}>
                        <Text>点击分享文本,URL和标题</Text>
                    </View>
                </TouchableHighlight>
                <Text>{this.state.result}</Text>

                <WebView
                    ref='webView'
                    allowsInlineMediaPlayback={true} // 指定HTML5视频是在网页当前位置播放还是使用原生的全屏播放器播放。 默认值为false
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={this.state.source}
                    onLoadEnd={(e) => this.onLoadEnd(e)}
                    scalesPageToFit
                />
            </View>
        )
    }
    onLoadEnd(e: any) {

    }
}
const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 5,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#eeeeee',
        padding: 10,
    },

    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    webView: {
        flex: 1,
        backgroundColor: 'white',
    }
});
