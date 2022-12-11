import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Login from './Login';
import Signup from './Signup';
import ImageUpload from './ImageUpload';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Calendar from './Calender';
import Abscence from './Absence';

const Drawer = createDrawerNavigator();
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Tab = createBottomTabNavigator();

const TabContent = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Calendar') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Aboutus') {
            iconName = focused ? 'information' : 'information-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          } else if (route.name === 'Posts') {
            iconName = focused ? 'list' : 'list-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{ tabBarShowLabel: true, tabBarActiveBackgroundColor: '#ccc' }}
      />
      <Tab.Screen
        name="ImageUpload" 
        component={ImageUpload}
        options={{ title: 'ImageUpload', tabBarActiveBackgroundColor: '#ccc' }}
      />
      <Tab.Screen
        name="Abscence" 
        component={Abscence}
        options={{ title: 'Abscence', tabBarActiveBackgroundColor: '#ccc' }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
    
      <Stack.Screen 
        name="Home"
        component={TabContent}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
