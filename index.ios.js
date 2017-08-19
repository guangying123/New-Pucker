/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// import {Navigator} from 'react-native-deprecated-custom-components';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Sheyoudata from './MyDB/Sheyou';
import SheyouItem from './mycomponent/SheyouItem';
import styles from './myStyle/Mystyle';
import MyPicker from './Utils/MyPicker';
import PickerDB from './MyDB/PickerDB';

export default class my_react_native extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            Sheyou: Sheyoudata
        }
    }

    render() {
        let Sheyoushow = this.state.Sheyou;
        return(
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>My Demo</Text>
                </View>
                <View style={{marginHorizontal:20}}>
                    <MyPicker  lineHeight={20} lines={2} style={{color:'red'}}>
                        {
                            PickerDB.map((val,index) => {
                                console.log(val);
                                return <Text key={index}>
                                    {val}
                                </Text>
                            })
                        }
                    </MyPicker>
                </View>
                <View style={styles.main}>
                    {
                        Sheyoushow.map((val,index) => {
                            return (
                                <SheyouItem SheyouObj={val} key={index} index={index} delectHandler={this.delectHandler.bind(this)}/>
                            );
                        })
                    }
                </View>
            </View>
        );
    }

    delectHandler(index) {
        let tmSheyou = this.state.Sheyou;
        tmSheyou.splice(index,1);
        this.setState({Sheyou:tmSheyou});
    }
}


AppRegistry.registerComponent('my_react_native', () => my_react_native);
