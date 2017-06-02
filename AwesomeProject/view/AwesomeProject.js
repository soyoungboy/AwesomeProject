import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    Image,
    TouchableHighlight,
    ToastAndroid,
    Alert,
    ListView,
    Button,
    DrawerLayoutAndroid,
    TouchableOpacity,
    View,
} from 'react-native';
import NetUitl from './NetUitl';
import MyButton from './MyButton';
export default class AwesomeProject extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['王富彬', '李琼琼', '王富彬', '李琼琼']),
        };
    }

    _onPressButton() {
        console.log("You tapped the button!");
        NetUitl.get('http://facebook.github.io/react-native/movies.json', function (movies) {
            //回调的结果处理;
            ToastAndroid.showWithGravity(movies, ToastAndroid.SHORT, ToastAndroid.CENTER);
        })

    }

    _jumpToDay(index) {
        this.props.navigator.push({
            title: this.state.days[index].title,
            index: index + 1,
            display: !this.state.days[index].hideNav,
            component: this.state.days[index].component,
        })
    }

    render() {
        const {navigate} = this.props.navigation;
        var navigationView = (
            <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={{width: '100%', textAlign: 'center', marginTop: 20}}>相册</Text>
                <Text style={{width: '100%', textAlign: 'center', marginTop: 20}}>账号信息</Text>
                <Text style={{width: '100%', textAlign: 'center', marginTop: 20}}>版本更新</Text>
                <Text style={{width: '100%', textAlign: 'center', marginTop: 20}}>关于</Text>
                <TouchableOpacity onPress={() => {
                    this.drawer.closeDrawer()
                }}>
                    <Text style={{width: '100%', textAlign: 'center', marginTop: 20}}>关闭抽屉</Text>
                </TouchableOpacity>
            </View>
        );

        return (
            <DrawerLayoutAndroid
                ref={(drawerObj) => {
                    this.drawer = drawerObj;
                }}
                drawerWidth={120}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                drawerBackgroundColor='#00ffffaa'
                drawerLockMode={'unlocked'}
                keyboardDismissMode={'on-drag'}
                renderNavigationView={() => navigationView}
                onDrawerSlide={() => {
                }}
                onDrawerOpen={() => {
                    ToastAndroid.show("打开抽屉", ToastAndroid.SHORT);
                }}
                onDrawerClose={() => {
                    ToastAndroid.show("关闭抽屉", ToastAndroid.SHORT);
                }}
                onDrawerStateChanged={(state) => {
                    ToastAndroid.show(state, ToastAndroid.SHORT);
                }}
            >
                <ScrollView showsVerticalScrollIndicator={true}>
                    <View style={styles.container}>


                        <Button
                            onPress={() => navigate('Chat', {user: 'Lucy'})}
                            title="跳转到ChatScreen"
                        />

                        <Text style={styles.welcome}>
                            Welcome to React Native!
                        </Text>
                        <Text style={styles.instructions}>
                            To get started, edit index.android.js
                        </Text>
                        <Text style={styles.instructions}>
                            Double tap R on your keyboard to reload,{'\n'}
                            Shake or press menu button for dev menu
                        </Text>
                        {/*加载本地图片*/}
                        <Image
                            source={require("../img/ic_launcher.png")}
                        ></Image>
                        {/*加载网络图片*/}
                        <Image source={{
                            uri: 'http://avatar.csdn.net/2/5/5/1_cyibing.jpg',
                            method: 'POST',
                            headers: {
                                Pragma: 'no-cache'
                            },
                            body: 'Your Body goes here'
                        }}
                               style={{width: 100, height: 100}}/>
                        {/*可点击的组件*/}
                        <TouchableHighlight onPress={this._onPressButton}>
                            <Text>Button</Text>
                        </TouchableHighlight>
                        {/*自定义组件*/}
                        <MyButton
                            bgColor='#000'
                            onPress={() => {
                                Alert.alert('Himi', ' MyBtton IS Click! ');
                            }}
                            imgWidth={100}
                            imgHeight={100}

                        >
                        </MyButton>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={(rowData) => <Text>{rowData}</Text>
                            }
                        />
                    </View>
                </ScrollView>
            </DrawerLayoutAndroid>
        );

    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});