import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Image } from 'react-native';

import icMenu from '../../../assets/icons/bars.png';

var { width,height } = Dimensions.get('window');

export const SearchScreen = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <TouchableOpacity
        style= {{marginLeft: -width + 70, width: 40, height: 50}}
        onPress={() => navigation.openDrawer()}>
        <View >
          <Image 
            source= {icMenu}
            style={{width: 25, height: 25, marginTop: 15}}/>
        </View>
      </TouchableOpacity>
      <Text style={styles.header} > Search Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  header: {
    marginTop: -40, 
    fontSize: 25
  },
});