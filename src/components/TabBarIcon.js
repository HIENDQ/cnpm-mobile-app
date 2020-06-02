import * as React from 'react';
import { Image, StyleSheet} from 'react-native'

import add from '../assets/icons/add.png';
import add_fc from '../assets/icons/add_fc.png';
import browser from '../assets/icons/browser.png';
import browser_fc from '../assets/icons/browser_fc.png';
import heart from '../assets/icons/heart.png';
import heart_fc from '../assets/icons/heart_fc.png';
import search from '../assets/icons/search.png';
import search_fc from '../assets/icons/search_fc.png';
const View = (name) =>{
  console.log(name)
  return <Image
      source={name}
      style= {styles.icon}
    />
}

export const TabBarIcon = (props) =>{
  const { focused, name }  = props;
  console.log('---------------------')
  return focused ? <View name = {name}/>: <View name = {name+'_fc'}/>;
}


const styles = StyleSheet.create({
  icon: {
    height: 30, 
    width: 30},
})