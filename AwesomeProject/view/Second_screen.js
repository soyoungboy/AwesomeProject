import React, {Component} from 'react';
import {
    Text,
    Image,
    View,
    TextInput,
} from 'react-native';

export default class Second_screen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'second',
    };

    render() {
        return <View style={{backgroundColor: '#f4f4f4', flex: 1}}>
            <Image
                source={{
                    uri: 'http://avatar.csdn.net/2/5/5/1_cyibing.jpg',
                    method: 'POST',
                    headers: {
                        Pragma: 'no-cache'
                    },
                    body: 'Your Body goes here'
                }}
                style={{
                    borderRadius: 35,
                    height: 70,
                    width: 70,
                    marginTop: 40,
                    alignSelf: 'center',
                }}
            />
            <TextInput
                style={
                    {
                        backgroundColor: '#fff',
                        marginTop: 10,
                        height: 35,
                    }
                }
                placeholder='QQ号/手机号/邮箱'
                numberOfLines={1}
                autoFocus={true}
                underlineColorAndroid={'transparent'}
                textAlign='center'
            />
            <View
                style={{height: 1, backgroundColor: '#f4f4f4'}}
            />
            <TextInput
                style={
                    {
                        backgroundColor: '#fff',
                        height: 35,
                    }
                }
                placeholder='密码'
                numberOfLines={1}
                underlineColorAndroid={'transparent'}
                secureTextEntry={true}
                textAlign='center'
            />
            <View
                style={
                    {
                        marginTop: 15,
                        marginLeft: 10,
                        marginRight: 10,
                        backgroundColor: '#63B8FF',
                        height: 35,
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }
                }
            >
                <Text style={{color: '#fff'}}>
                    登录
                </Text>

            </View>

            <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end', bottom: 10}}>
                <Text style={
                    {
                        fontSize: 12,
                        color: '#63B8FF',
                        marginLeft: 10,
                    }
                }>
                    无法登录?
                </Text>
                <Text style={
                    {
                        fontSize: 12,
                        color: '#63B8FF',
                        marginRight: 10,
                        alignItems: 'flex-end',
                        flex: 1,
                        flexDirection: 'row',
                        textAlign: 'right',
                    }
                }>
                    新用户
                </Text>
            </View>
        </View>
    }
}