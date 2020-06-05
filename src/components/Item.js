import React, { Component } from 'react'
import { Image, StyleSheet, View, Dimensions , TouchableOpacity} from 'react-native';
import { Feather, Ionicons,AntDesign } from '@expo/vector-icons';
var { width,height } = Dimensions.get('window');
import Text from './Text';
import Route from '../constants/Route';
import getNewsInStorage from '../api/getNewsInStorage';

import icMap from '../assets/icons/ic_map-marker.png';
import icClock from '../assets/icons/ic_clock.png';
import icheart from '../assets/icons/love.png';
import icheartbr from '../assets/icons/h.png';

var box_height = height/4+20;


export const Item = ({navigation , item})=>{
  const [isSave, setSave] = React.useState(false);

  React.useEffect(() => {
    getNewsInStorage()
      .then(result => {
        if(result.find(data => data._id === item._id)) setSave(true);
      })
    return () => {
    };
  }, []);

  return (
    <TouchableOpacity onPress={() => navigation.push(Route.DETAIL,{ item})}>
      {/* onPress={() => {props.navigation.navigate(Route.INFO, { user: props.user })}} */}
        <View style={styles.container}>
          <View style={ styles.box1 }>
            <View style={ styles.box3 }>
              <Image
                style = {styles.img}
                source={{
                  uri: item.picture,
                }}
              /> 
            </View>
            <View style={ styles.box4 }>
              <Text  h4 style = {styles.title}>
                {item.titile}
              </Text>
              <Text  style={{fontSize: 18, marginTop: 8 ,color: '#9D150A'}}>
                6 Triệu VND/tháng
              </Text>
            </View>
          </View>
          <View style={ styles.box2 }>
            <View style = {styles.box5}>
            <Image source={icMap} style = {styles.icon}/>
              <Text style = {styles.address}>{item.address}</Text>
            </View>
            <View style = {styles.box6}>
              <View style = {styles.box7}>
                <Image source={icClock} style = {styles.icon}/>
              <Text style = {styles.address}>{item.createDay}</Text>
              </View>

              {!isSave? 
              <View style = {styles.box8}>
                <Image source={icheart } style={styles.icon} />
                <Text style = {styles.save}>Lưu tin</Text>
              </View>
              :
              <View style = {styles.box8}>
                <Image source={icheartbr } style={styles.icon} />
                <Text style = {styles.save}>Đã lưu</Text>
              </View>}
            </View>
          </View>
        </View>
    </TouchableOpacity>
  );
}
 
const styles = StyleSheet.create({
  container: {
    height: box_height,
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
    borderRadius:15,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#D3C1C1',
    backgroundColor: 'white',
  },
  box1: {
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    flex: 7,
  },
  box2: {
    flexDirection: 'column',
    flex: 4,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
  box3: {
    flex: 4,
  },
  box4: {
    marginLeft: 15,
    flex: 6
  }, 
  box5: {
    flexDirection: 'row',
    flex: 1,
  },
  box6: {
    flexDirection: 'row',
    flex: 1,
  },
  box7: {
    flexDirection: 'row',
    flex: 3,
  },
  box8: {
    flexDirection: 'row',
    flex: 1.7,
  },
  img: {
    width: width/3+10,
    height: height/8,
    marginTop: 10
  },
  title: {
    fontSize: 18,
    marginTop: 10,
  },
  icon: {
    width: 16,
    height: 16,
    marginTop: 3,
    marginLeft: 5
  },
  address: {
    marginLeft: 5,
    fontSize: 14,
  },
  save: {
    marginLeft: 5,
  }
});

