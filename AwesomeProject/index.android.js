/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';

const W = Dimensions.get('window').width;   //获取屏幕宽度
const H = Dimensions.get('window').height;   //获取屏幕高度
import {
    AppRegistry,
    Dimensions,
} from 'react-native';
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';

import TabBarItem from './TabBarItem';
import First_screen from './view/First_screen';
import Second_screen from './view/Second_screen';
import Third_screen from './view/Third_screen';
import AwesomeProject from './view/AwesomeProject';
import Day17 from './view/day17';
import SampleAppMovies from './view/SampleAppMovies';
import DoubanMovies from './view/DoubanMovies';
import MeiTuan from './view/ListViewProjects';
import MyWebView from './view/MyWebView';
import DataPickerDemo from './view/DataPickerDemo';
import ClipBoardDemo from './view/ClipBoardDemo';
import TimePickerAndroidDemo from './view/TimePickerAndroidDemo';
import LinkingDemo from './view/LinkingDemo';
import DoubanMovies2 from './view/DoubanMovies2';

const MainScreenNavigator = TabNavigator({
        HomeVC: {
            screen: AwesomeProject,
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon: ({focused}) => (
                    <TabBarItem
                        focused={focused}
                        normalImage={require('./img/ic_launcher.png')}
                        selectedImage={require('./img/ic_launcher.png')}
                        imgWidth={100}
                        imgHeight={100}
                    />
                ),
            }
        },
        FirstVC: {
            screen: First_screen,
            navigationOptions: {
                tabBarLabel: '附近',
                tabBarIcon: ({focused}) => (
                    <TabBarItem
                        focused={focused}
                        normalImage={require('./img/ic_launcher.png')}
                        selectedImage={require('./img/ic_launcher.png')}
                        imgWidth={100}
                        imgHeight={100}
                    />
                ),
            }
        },
        SecondVC: {
            screen: Second_screen,
            navigationOptions: {
                tabBarLabel: '逛一逛',
                tabBarIcon: ({focused}) => (
                    <TabBarItem
                        focused={focused}
                        normalImage={require('./img/ic_launcher.png')}
                        selectedImage={require('./img/ic_launcher.png')}
                        imgWidth={100}
                        imgHeight={100}
                    />
                ),
            }
        },
        ThirdVC: {
            screen: Third_screen,
            navigationOptions: {
                tabBarLabel: '订单',
                tabBarIcon: ({focused}) => (
                    <TabBarItem
                        focused={focused}
                        normalImage={require('./img/ic_launcher.png')}
                        selectedImage={require('./img/ic_launcher.png')}
                        imgWidth={100}
                        imgHeight={100}
                    />
                ),
            }
        },
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#06C1AE', // 选中
            inactiveTintColor: '#979797', // 正常
            style: {backgroundColor: '#ffffff'},
        }
    }
);

const SimpleApp = StackNavigator({
        tab: {
            screen: MainScreenNavigator,
        },
    AwesomeProject:{screen: AwesomeProject},
    Chat: {screen: MyWebView},
    },
);


AppRegistry.registerComponent('AwesomeProject', () => SimpleApp);
