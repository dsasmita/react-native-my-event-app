import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

const HomeScreen = (props) => {
  return (
    <>
      <SafeAreaView>
        <Text>Event list</Text>
        <Button
          title="Add new event"
          onPress={() => props.navigation.navigate('Add')}
        />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
