import React, {useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import icMenu from '../../../assets/icons/bars.png';
import { Item } from '../../../components/Item';
import getNewsInStorage from '../../../api/getNewsInStorage';

var { width, height } = Dimensions.get('window');

export const SaveScreen = ({navigation}) => {

  const [data, setData] = React.useState([]);// data: list
  useEffect(() => {
    getNewsInStorage()
      .then(result => setData(result))
    return () => {
    };
  }, []);


  return (
    <View style = {styles.container}>
      
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}>
          <View  style={{marginLeft: 10}} >
            <Image 
              source= {icMenu}
              style={{width: 25, height: 25, marginTop: 15}}/>
          </View>
        </TouchableOpacity>
        <Text style={styles.title}>Yêu thích</Text>
      </View>
      <View style={styles.divider}/>
      <KeyboardAwareScrollView>
        <FlatList
            data={data}
            renderItem={({ item }) => <Item navigation= { navigation } item = { item } />}
            keyExtractor={item => item._id}/> 
      </KeyboardAwareScrollView>
    </View>
  );
};
 const styles = StyleSheet.create({
   title: {
     marginBottom:20,
     fontSize: 40,
     marginLeft: width/6,
    },
  divider:{
    width: width,
    height: 1,
    backgroundColor: '#DADBDC',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  }
}); 
