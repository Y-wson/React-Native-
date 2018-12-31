import React,{PureComponent} from "react";
import {View,Text,Button} from "react-native";
import {connect} from 'react-redux';

import {addTem} from "../redux/num.redux";

@connect(state=>state.num,{addTem})
export default class Temp extends PureComponent{
    render(){
        return (
            <View>
                <Text>现在温度:{this.props.number}</Text>
                <Button onPress={this.props.addTem} title={"升温"}></Button>
            </View>
        )
    }
}