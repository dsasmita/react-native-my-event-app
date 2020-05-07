import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/home.js';
import AddScreen from '../screens/add.js';

const Stack = createStackNavigator();

const MainContainer = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#f4511e" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Event terbaru',
          }}
        />
        <Stack.Screen
          name="Add"
          component={AddScreen}
          options={{title: 'Event terbaru'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
