import React, { Component } from 'react'
import { Image, StyleSheet, View, Dimensions } from 'react-native';

var { width,height } = Dimensions.get('window');
import Text from './Text';
import Route from '../constants/Route';
import { Button } from '../components'


var box_height = height/5+10;

export default class ItemHistory extends Component {
  
  render() {
    const  navigation  = this.props.navigation;
    return (
    <View style={styles.item}>
     <View style={{alignItems: 'center'}}>
      <Image
          style = {styles.img}
          source={require('../assets/image-background.png')} 
        />
     </View>
      <View style={styles.content}>
        <Text style={styles.name}>CHO THUÊ NHÀ PHỐ 3 PHÒNG NGỦ TẠI QUẬN HẢI CHÂU (ID:9790105)</Text>
        <Text style={styles.time}>Ngày đăng: <Text> 10 ngày trước</Text> </Text>
      </View> 
      <View style = {styles.below}>
          <View style = {styles.box1}>
            <Button style = {styles.button_below} onPress={this.makeCall}>
              <Text button style = {[styles.button_text, styles.fontSize]} >Change</Text>
            </Button>
          </View>
          <View style = {styles.box1}>
            <Button style = {[styles.button_below ]} >
              <Text button style = {[styles.fontSize, styles.button_text ]}>Hide</Text>
            </Button>
          </View>
          <View style = {styles.box1}>
            <Button style = {styles.button_below} >
              <Text button style = {[styles.button_text, styles.fontSize, {marginLeft: 0}]} 
              onPress={()=> navigation.navigate('History Detail')}
              >Detail</Text>
            </Button>
          </View>
        </View>
    </View>
    );
  }
}
 
const styles = StyleSheet.create({
  content:{
    height: height/8,
    marginTop: 10,
    marginLeft: 20,
  },
  fontSize:{
    fontSize: 18, 
  },
  time:{
    marginTop: 4,
    fontSize: 15,
  },
  button_text: {
    marginLeft : 10, 
    color: '#18DA57'
  },
  button_below: {
    borderRadius:7 ,
    borderWidth: 1,
    borderColor: '#C6D1D1',
    marginTop : 7,
    backgroundColor: 'white', 
    width: width*2/7, 
    flexDirection: 'row',
  },
  box1: {
    flex: 1,
  },
  below:{
    marginLeft: height/70,
    marginTop:4,
    flex: 1,
    flexDirection: 'row',
    height: height/10,
  },
  name: {
    fontSize: 20,
  },
  item: {
    backgroundColor: '#E9EBEE',
    flex: 1,
    width: width- 20 ,
    height: height*4/7,
    borderWidth: 1, 
    borderColor: '#DADBDC', 
    borderRadius: 10, 
    marginBottom: 20,
  },
  img : {
    marginTop: 10,
    height: height/3-15,
    width: width-60,
  },
});

