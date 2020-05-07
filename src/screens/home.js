import React from 'react';
import {SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import {useSelector} from 'react-redux';

import EventComponent from '../components/eventComponent.js';
import {eventsSelector} from '../slices/events.js';

const HomeScreen = (props) => {
  const {events} = useSelector(eventsSelector);

  const renderEvent = () => {
    const eventsShow = events.filter(function (event) {
      let startDate = new Date();
      let endDate = new Date(event.date_time);
      let seconds = (endDate.getTime() - startDate.getTime()) / 1000;
      return seconds > 0;
    });

    return (
      <FlatList
        data={eventsShow}
        keyExtractor={(item) => item.key}
        renderItem={({item}) => <EventComponent key={item.key} item={item} />}
      />
    );
  };

  const clickAddFab = () => {
    props.navigation.navigate('Add');
  };

  return (
    <>
      <SafeAreaView>{renderEvent()}</SafeAreaView>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.2)',
          alignItems: 'center',
          justifyContent: 'center',
          width: 70,
          position: 'absolute',
          bottom: 20,
          right: 20,
          height: 70,
          backgroundColor: '#f4511e',
          borderRadius: 100,
        }}
        onPress={clickAddFab}>
        <Icon name="ios-add" size={30} style={{color: 'white'}} />
      </TouchableOpacity>
    </>
  );
};

export default HomeScreen;
