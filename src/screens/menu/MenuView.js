import React from 'react';
import {
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { Block, Text } from 'expo-ui-kit';
import { Image, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Route from '../../constants/Route';

import icLogin from '../../assets/icons/ic_login.png';
import icLogout from '../../assets/icons/ic_logout.png';
import icChangInfo from '../../assets/icons/ic_avatar.png';
import icChangePassword from '../../assets/icons/ic_key.png';
import icHistory from '../../assets/icons/ic_file.png';

export const DrawerMenuHasToken = props => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={{ flex: 1 }}>
      <Block>
        <Block flex={0.4} margin={20} bottom>
          <Image
            source={{
              uri: 'https://react-ui-kit.com/assets/img/react-ui-kit-logo-green.png',
              height: 60,
              width: 60,
              scale: 0.5,
            }}
            resizeMode="center"
            style={styles.avatar}
          />
          <Text white title>
            React UI Kit
          </Text>
          <Text white size={9}>
            contact@react-ui-kit.com
          </Text>
        </Block>
        <Block>
          {/* <DrawerItem
            label="Dashboard"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Home')}
            icon={() => <AntDesign name="dashboard" color="white" size={16} />}
          /> */}
          <DrawerItem
            label="History"
            labelStyle={{ color: 'white', marginLeft: -16 }}
            style={{ alignItems: 'flex-start', marginVertical: 0 }}
            onPress={() => props.navigation.navigate(Route.POSTED)}
            icon={() => <Image source={icHistory } style={{width: 20, height: 20, marginLeft: 15}} />}
          />

          <DrawerItem
            label="Change Info"
            labelStyle={{ color: 'white', marginLeft: -16 }}
            style={{ alignItems: 'flex-start', marginVertical: 0 }}
            onPress={() => props.navigation.navigate('ChangeInfo')}
            icon={() => <Image source={icChangInfo } style={{width: 20, height: 20, marginLeft: 15}} />}
          />
          <DrawerItem
            label="Change Password"
            labelStyle={{ color: 'white', marginLeft: -16 }}
            style={{ alignItems: 'flex-start', marginVertical: 0 }}
            onPress={() => props.navigation.navigate('ChangePassword')}
            icon={() => <Image source={icChangePassword } style={{width: 20, height: 20, marginLeft: 15}}/>}
          />
          <DrawerItem
          label="Logout"
          labelStyle={{ color: 'white' , marginLeft: -16}}
          style={{ alignItems: 'flex-start', marginVertical: 0 }}
          icon={() =><Image source={icLogout } style={{width: 20, height: 20, marginLeft: 15}} />}
          onPress={() => props.navigation.navigate('Login')}
        />
        </Block>
      </Block>
    </DrawerContentScrollView>
  );

}
export const DrawerMenuHasNotToken = props => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={{ flex: 1 }}>
      <Block>
        <Block flex={0.4} margin={20} bottom>
          <Image
            source={{
              uri: 'https://react-ui-kit.com/assets/img/react-ui-kit-logo-green.png',
              height: 60,
              width: 60,
              scale: 0.5,
            }}
            resizeMode="center"
            style={styles.avatar}
          />
          <Text white title>
            React UI Kit
          </Text>
          <Text white size={9}>
            contact@react-ui-kit.com
          </Text>
        </Block>

        <DrawerItem
          label="Login"
          labelStyle={{ color: 'white' }}
          icon={() => <Image source={ icLogin } style={{width: 20, height: 20, marginLeft: 15}} />}
          onPress={() => props.navigation.navigate('Login')}
        />
      </Block>
    </DrawerContentScrollView>
  );
}
const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    // overflow: 'scroll',
    // borderWidth: 1,
  },
  drawerStyles: { flex: 1, width: '50%', backgroundColor: 'transparent' },
  drawerItem: { alignItems: 'flex-start', marginVertical: 0 },
  drawerLabel: { color: 'white', marginLeft: -16 },
  avatar: {
    borderRadius: 60,
    marginBottom: 16,
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
  },
});


