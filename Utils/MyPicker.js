/**
 * @file
 * @author yangguang.chang
 */
import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    StyleSheet
}from 'react-native'

class MyPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPicker:false,
            isUpper:false,
            reHeight:0
        }
    }

    render() {
        let {lineHeight, lines, style, children} = this.props;
        let {isPicker, isUpper, reHeight} = this.state;
        let curWindow = lineHeight*lines;
        let numlines = 0;
        let contentStyle = {lineHeight:lineHeight};
        if(isPicker) {
            numlines = isUpper ? reHeight/lineHeight : lines;
        }
        let par = {children,curWindow, numlines, style, contentStyle};
        return(
            <View>
                {this.Content(par)}
                <View style={Styles.switcher}>
                    {this.Switcher()}
                </View>
            </View>
        );
    }

    Content({children, curWindow, numlines, style, contentStyle}) {
        if(children) {
            let spcProps = !this.state.isUpper ? {
                numberOfLines:numlines,
                ellipsizeMode:'tail'
            } : {};
            return (
                <Text
                    {...spcProps}
                    style={[style, contentStyle]}
                    onLayout={(e) => {this.dealOnLayOut(e,curWindow)}}
                >
                    {children}
                </Text>
            )
        }else return null;
    }
    Switcher() {
        let pSwitch = {"true":"Up","false":'Down'};
        let {isUpper} = this.state;
        if(this.state.isPicker) {
            return <Text onPress={(e) => {this.setState({isUpper:!isUpper})}}>{pSwitch[isUpper.toString()]}</Text>
        }else return null;
    }

    dealOnLayOut(e, curWindow) {
        let {height} = e.nativeEvent.layout;
        if(curWindow < height && !this.state.reHeight) {
            this.setState({isPicker:true, reHeight:height});
        }
    }
}

MyPicker.defaultProps = {
    lineHeight:20,
    lines:4
}

MyPicker.propTypes = {
    lineHeight: PropTypes.number,
    lines: PropTypes.number
}

const Styles = StyleSheet.create({
    switcher:{
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        marginTop:5
    }
});

export default MyPicker;
