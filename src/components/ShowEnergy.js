import React from 'react';
import { SimpleLineIcons, } from '@expo/vector-icons';
import { Image, View , StyleSheet } from 'react-native';

import icEnergy from '../assets/icons/ic_energy.png'
export default class ShowEnergy extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            isShowText: false
        };
        setInterval(()=>{
            this.setState({
                isShowText : !this.state.isShowText
            });
        } , 500);
    }
    render(){
        const { isShowText } = this.state;
        return(
            <View style = {isShowText?styles.active : styles.un_active}>
                <Image source={icEnergy} style={styles.icon}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
    },
    active: {
        opacity: 1, 
    },
    un_active: {
        opacity: 0, 
    },
})