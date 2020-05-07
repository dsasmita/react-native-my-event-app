import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

import rootReducer from '../slices/index.js';

import HomeScreen from '../screens/home.js';
import AddScreen from '../screens/add.js';

const store = configureStore({reducer: rootReducer});
const Stack = createStackNavigator();

const MainContainer = () => {
  return (
    <Provider store={store}>
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
              title: 'Libur Nasional',
            }}
          />
          <Stack.Screen
            name="Add"
            component={AddScreen}
            options={{title: 'Tambah Libur Baru'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default MainContainer;
