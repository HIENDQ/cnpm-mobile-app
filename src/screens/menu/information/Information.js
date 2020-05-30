import React from 'react';
import { View, StyleSheet, Text, Image ,Dimensions, TextInput} from 'react-native';
import {Button} from '../../../components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Textarea from 'react-native-textarea';
var { width,height } = Dimensions.get('window');

import getUser from '../../../api/getUser';

export const Information = ({route, navigation}) => {


  const [name, setName] = React.useState('');

  React.useEffect(() => {
    
    setName(route.params.user.name);

    console.log("componentDidUnmount");
    return () => {
      console.log("componentWillUnmount");
    };
  }, []);
  return (
    <View style = {{flex: 1 }}>
      <KeyboardAwareScrollView style = {styles.main}>
        <View>
          <Image
          style = {styles.img}
          source={require('../../../assets/image-background.png')} 
          /> 
        </View>
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Image 
          source={{
            uri: 'https://react-ui-kit.com/assets/img/react-ui-kit-logo-green.png',
            height: 100,
            width: 100,
            scale: 0.5,
          }}
          style = {styles.avatar}/>
          <Text style={styles.txtname}>{route.params.user.name}</Text>
        <Text style={styles.txtEmail}>{route.params.user.email}</Text>
        </View>
        <View style={ styles.content}> 
          <Text style={{marginLeft: 50, marginTop: 20, fontSize: 15}}>Name:</Text>
          <TextInput style={styles.input} value= {name}/>
          <Text style={{marginLeft: 50, marginTop: 15, color: 'black'}} >Phone: </Text>
          <TextInput style={styles.input} 
          keyboardType = 'phone-pad'
          placeholder={'Please enter your number phone! '}
          />
          <Text style={{marginLeft: 50, marginTop: 15}}>Address: </Text>
          <Textarea
              containerStyle={styles.textareaContainer}
              style={styles.textarea}
              // onChangeText={this.onChange}
              maxLength={120}
              placeholder={'Please enter your address! '}
              placeholderTextColor={'#c7c7c7'}
              underlineColorAndroid={'transparent'}
          />
          <Button
           style={{ marginBottom: 20 , marginLeft: 50, marginRight: 50}}
          >
            <Text button>Save</Text>
          </Button>
        </View>
        
      </KeyboardAwareScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    height: height - height/10,
  },
  textarea:{
    marginLeft: 50,
    marginRight: 50,
  },
  input:{
    marginLeft: 50,
    marginRight: 50,
    borderColor:'#F2F2F2',
    borderBottomColor: 'red',
    borderWidth: 1
  }

  ,
  content:{
    flexDirection:'column',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  avatar: {
    marginTop: -40,
    borderRadius: 60,
    marginBottom: 16,
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
    marginLeft: 15,
  },
  txtname: {
    marginTop: -10,
    color: '#717C81',
    fontSize: 18
  },
  txtEmail: {
    fontSize: 15,
    color: 'pink'
  },
  img : {
    height: height/3+15,
    width: width,
  },
});