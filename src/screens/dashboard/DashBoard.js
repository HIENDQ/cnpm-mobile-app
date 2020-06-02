import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet , Image } from 'react-native';

import Route from '../../constants/Route';
import { HomeScreen } from '../dashboard/home/HomeScreen';
import { DetailScreen } from './DetailScreen';
import { MapScreen } from './MapScreen';
import { PostScreen } from '../dashboard/post/PostScreen';
import { SaveScreen } from '../dashboard/save/SaveScreen';
import { SearchScreen } from  '../dashboard/search/SearchScreen';

import add from '../../assets/icons/add.png';
import add_fc from '../../assets/icons/add_fc.png';
import browser from '../../assets/icons/browser.png';
import browser_fc from '../../assets/icons/browser_fc.png';
import heart from '../../assets/icons/heart.png';
import heart_fc from '../../assets/icons/heart_fc.png';
import search from '../../assets/icons/search.png';
import search_fc from '../../assets/icons/search_fc.png';


const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStackScreen = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen name= {Route.HOME} component={ HomeScreen } navigation ={navigation} 
      options={{
        headerTransparent: true,
        title: null,
        }}
      />

      <Stack.Screen name= {Route.DETAIL} component={ DetailScreen } navigation ={navigation}
      options={{
        headerTransparent: true,
        title: null,
        }}
      />
    </Stack.Navigator>
  );
  const SaveStackScreen = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen name= {Route.SAVE} component={ SaveScreen } navigation ={navigation} 
      options={{
        headerTransparent: true,
        title: null,
        }}
      />

    </Stack.Navigator>
  );
  const PostStackScreen = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen name= {Route.POST} component={ PostScreen } navigation ={navigation} 
      options={{
        headerTransparent: true,
        title: null,
        }}
      />

    </Stack.Navigator>
  );
  const SearchStackScreen = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen name= {Route.SEARCH} component={ SearchScreen } navigation ={navigation} 
      options={{
        headerTransparent: true,
        title: null,
        }}
      />

    </Stack.Navigator>
  );
  const TabsScreen = (props) => (
    <Tabs.Navigator
    options={{
      
    }}
    >
      <Tabs.Screen name= {Route.HOME} component={HomeStackScreen}
      options = {{
        title: 'HOME',
        tabBarIcon: ({ focused }) => focused ? <Image source={browser_fc} style={styles.icon} /> : <Image source={browser} style={styles.icon} />
      }}/>
      <Tabs.Screen name= {Route.SAVE} component={SaveStackScreen} 
      options = {{
        title: 'SAVE',
        tabBarIcon: ({ focused }) => focused ? <Image source={heart_fc} style={styles.icon} /> : <Image  source= {heart} style={styles.icon} />
      }}/>
      <Tabs.Screen name= {Route.POST} component={PostStackScreen} 
      options = {{
        title: 'POST',
        tabBarIcon: ({ focused }) => focused ? <Image source={add_fc} style={styles.icon} /> : <Image source={add} style={styles.icon} />
      }}/>
      <Tabs.Screen name= {Route.SEARCH} component={SearchStackScreen} 
      options = {{
        title: 'SEARCH',
        tabBarIcon: ({ focused }) => focused ? <Image source={search_fc} style={styles.icon} /> : <Image source={search} style={styles.icon} />
      }}/>
    </Tabs.Navigator>
  );



  export const Dashboard = ({navigation}) => {
    return (
      <TabsScreen navigation={ navigation }/>
    )
  }

  const styles = StyleSheet.create({
    icon: {
      height: 25, 
      width: 25},
  })