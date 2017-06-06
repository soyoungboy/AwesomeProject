/**
  * Sample React Native App
  * https://github.com/facebook/react-native
  * @flow
  */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    ToastAndroid,
} from 'react-native';

import Util from './utils';
var REQUEST_URL = 'https://api.douban.com/v2/movie/in_theaters';
export default class DoubanMovies2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
    }

    componentDidMount() {
        // this.fetchData();
        this.requestData();
    }


    async requestData() {
        try {
            // 注意这里的await语句，其所在的函数必须有async关键字声明
            let response = await fetch(REQUEST_URL);
            let responseJson = await response.json();
            let dataList = responseJson.subjects.map((info) => {
                return {
                    id:info.id,
                    alt:info.alt,
                    imageUrl: info.images.small,
                    title: info.title,
                    year:  info.year
                }
            })
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(dataList),
                loaded: true,
            });
        } catch(error) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows([]),
                loaded: false,
            });
            console.error(error);
        }
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        return (

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderMovie}
                    style={styles.listview}
                />

        );
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading movies...
                </Text>
            </View>
        );
    }

    renderMovie(dataList) {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: dataList.imageUrl}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{dataList.title}</Text>
                    <Text style={styles.year}>{dataList.year}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        borderBottomColor: "#aaa",
        borderBottomWidth: Util.pixel,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
});

AppRegistry.registerComponent('SampleAppMovies', () => SampleAppMovies);