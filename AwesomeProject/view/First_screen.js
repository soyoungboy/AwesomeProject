import React, {Component} from 'react';
import {
    Text,
    Image,
    View,
} from 'react-native';

export default class First_screen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'first',
    };

    render() {
        return (
            <View style={{marginLeft: 5, marginTop: 10, marginRight: 5}}>

                <View style={{flexDirection: 'row'}}>
                    <View style={{width: 70}}>
                        <Image source={require('../img/ic_launcher.png')}
                               style={{alignSelf: 'center', width: 45, height: 45}}/>
                        <Text style={{marginTop: 5, textAlign: 'center', fontSize: 11, color: '#555555'}}>美食</Text>
                    </View>
                    <View style={{width: 70}}>
                        <Image source={require('../img/ic_launcher.png')}
                               style={{alignSelf: 'center', width: 45, height: 45}}/>
                        <Text style={{
                            marginTop: 5,
                            alignSelf: 'center',
                            fontSize: 11,
                            color: '#555555',
                            textAlign: 'center'
                        }}>电影</Text>
                    </View>
                    <View style={{width: 70}}>
                        <Image source={require('../img/ic_launcher.png')}
                               style={{alignSelf: 'center', width: 45, height: 45}}/>
                        <Text style={{
                            marginTop: 5,
                            alignSelf: 'center',
                            fontSize: 11,
                            color: '#555555',
                            textAlign: 'center'
                        }}>酒店</Text>
                    </View>
                    <View style={{width: 70}}>
                        <Image source={require('../img/ic_launcher.png')}
                               style={{alignSelf: 'center', width: 45, height: 45}}/>
                        <Text style={{
                            marginTop: 5,
                            alignSelf: 'center',
                            fontSize: 11,
                            color: '#555555',
                            textAlign: 'center'
                        }}>KTV</Text>
                    </View>
                    <View style={{width: 70}}>
                        <Image source={require('../img/ic_launcher.png')}
                               style={{alignSelf: 'center', width: 45, height: 45}}/>
                        <Text style={{
                            marginTop: 5,
                            alignSelf: 'center',
                            fontSize: 11,
                            color: '#555555',
                            textAlign: 'center'
                        }}>外卖</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                    <View style={{width: 70}}>
                        <Image source={require('../img/ic_launcher.png')}
                               style={{alignSelf: 'center', width: 45, height: 45}}/>
                        <Text style={{marginTop: 5, textAlign: 'center', fontSize: 11, color: '#555555'}}>优惠买单</Text>
                    </View>
                    <View style={{width: 70}}>
                        <Image source={require('../img/ic_launcher.png')}
                               style={{alignSelf: 'center', width: 45, height: 45}}/>
                        <Text style={{
                            marginTop: 5,
                            alignSelf: 'center',
                            fontSize: 11,
                            color: '#555555',
                            textAlign: 'center'
                        }}>周边游</Text>
                    </View>
                    <View style={{width: 70}}>
                        <Image source={require('../img/ic_launcher.png')}
                               style={{alignSelf: 'center', width: 45, height: 45}}/>
                        <Text style={{
                            marginTop: 5,
                            alignSelf: 'center',
                            fontSize: 11,
                            color: '#555555',
                            textAlign: 'center'
                        }}>休闲娱乐</Text>
                    </View>
                    <View style={{width: 70}}>
                        <Image source={require('../img/ic_launcher.png')}
                               style={{alignSelf: 'center', width: 45, height: 45}}/>
                        <Text style={{
                            marginTop: 5,
                            alignSelf: 'center',
                            fontSize: 11,
                            color: '#555555',
                            textAlign: 'center'
                        }}>今日新单</Text>
                    </View>
                    <View style={{width: 70}}>
                        <Image source={require('../img/ic_launcher.png')}
                               style={{alignSelf: 'center', width: 45, height: 45}}/>
                        <Text style={{
                            marginTop: 5,
                            alignSelf: 'center',
                            fontSize: 11,
                            color: '#555555',
                            textAlign: 'center'
                        }}>丽人</Text>
                    </View>
                </View>
            </View>
        );
    }
}