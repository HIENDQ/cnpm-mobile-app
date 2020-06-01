import React from 'react';
import { View, StyleSheet, Text, Dimensions , Button,TouchableOpacity, Image} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import ItemHistory from '../../../components/ItemHistory'
import icMenu from '../../../assets/icons/bars.png'

var { width,height } = Dimensions.get('window');

export const HistoryView = ({ navigation }) => {
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
       <Text style={styles.title}>Post history</Text>
       <View style={styles.divider}/>
      <KeyboardAwareScrollView>

        <ItemHistory navigation={navigation} />
        <ItemHistory navigation={navigation} />
        <ItemHistory navigation={navigation} />
      </KeyboardAwareScrollView>
    </View>
  );
};
 const styles = StyleSheet.create({
   title: {
     marginTop: 10,
     marginBottom:20,
     fontSize: 40},
  divider:{
    width: width,
    height: 1,
    backgroundColor: '#DADBDC',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  }
}); 
