/**
 * @file
 * @author yangguang.chang
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    PixelRatio,
    Dimensions,
    Alert
}from 'react-native';
const {height, width} = Dimensions.get('window');

class SheyouItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let index = this.props.index;
        let SheyouObj = this.props.SheyouObj;

        return(
            <View  style={Styles.main}>
                {
                    Object.keys(SheyouObj).map((val,inex) => {
                            return (
                                <View style={Styles.item} key={inex}>
                                    <Text key={inex} style={Styles.itemText}>{SheyouObj[val]}</Text>
                                    <Text key={'i'+inex} style={Styles.sepLine}></Text>
                                </View>
                            );
                        }
                    )
                }
                <TouchableOpacity
                    onPress={() =>this.del(index)}
                >
                    <Text>删除</Text>
                </TouchableOpacity>
            </View>
        );
    }
    del(index) {
        Alert.alert(
            '提示',
            '删除该乘机人',
            [
                {
                    text:'OK',
                    onPress:() => this.props.delectHandler(index),
                },
                {
                    text:'Cancle',
                    onPress:()=> {}
                }
            ]
        )
    }

}


const Styles = StyleSheet.create({
    main:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:width-50,
        marginVertical:25,
        borderBottomWidth:1,
        borderTopWidth:1,
        borderColor:'gray'
    },
    sepLine: {
        borderWidth:1,
        borderColor:'gray',
        width:0,
        height:30
    },
    item : {
        width:(width-30)/4,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    itemText:{
        textAlign:'left'
    }
});

export default SheyouItem;