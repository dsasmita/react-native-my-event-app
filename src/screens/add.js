import React, {useState} from 'react';
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  View,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useDispatch, useSelector} from 'react-redux';

import {eventsSelector, setEvents} from '../slices/events.js';

const AddScreen = (props) => {
  const {events} = useSelector(eventsSelector);
  const dispatch = useDispatch();

  const [name, setName] = useState();
  const [date, setDate] = useState(new Date());
  const [dateFormat, setDateFormat] = useState();
  const [show, setShow] = useState(false);

  const handleInputName = (event) => {
    setName(event);
  };

  const makeid = () => {
    let result = '';
    let length = 9;
    let characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const handleSubmit = () => {
    if (!date || !name) {
      alert('Isi data dengan lengkap.');
      return false;
    }
    let newEvent = {
      key: makeid(),
      name: name,
      date_time: date.toString(),
    };
    let eventsUpdated = events.concat(newEvent);
    dispatch(setEvents(eventsUpdated));
    props.navigation.navigate('Home');
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDateFormat(formatDate(currentDate));
  };

  const showDatePicker = () => {
    setShow(true);
  };

  const formatDate = (dateRaw) => {
    let d = new Date(dateRaw);
    let tahun = d.getFullYear();
    let bulan = d.getMonth();
    let tanggal = d.getDate();
    let hari = d.getDay();

    switch (hari) {
      case 0:
        hari = 'Minggu';
        break;
      case 1:
        hari = 'Senin';
        break;
      case 2:
        hari = 'Selasa';
        break;
      case 3:
        hari = 'Rabu';
        break;
      case 4:
        hari = 'Kamis';
        break;
      case 5:
        hari = "Jum'at";
        break;
      case 6:
        hari = 'Sabtu';
        break;
    }

    switch (bulan) {
      case 0:
        bulan = 'Januari';
        break;
      case 1:
        bulan = 'Februari';
        break;
      case 2:
        bulan = 'Maret';
        break;
      case 3:
        bulan = 'April';
        break;
      case 4:
        bulan = 'Mei';
        break;
      case 5:
        bulan = 'Juni';
        break;
      case 6:
        bulan = 'Juli';
        break;
      case 7:
        bulan = 'Agustus';
        break;
      case 8:
        bulan = 'September';
        break;
      case 9:
        bulan = 'Oktober';
        break;
      case 10:
        bulan = 'November';
        break;
      case 11:
        bulan = 'Desember';
        break;
    }
    let tampilTanggal = hari + ', ' + tanggal + ' ' + bulan + ' ' + tahun;

    return tampilTanggal;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerForm}>
        <TextInput
          style={styles.input}
          placeholder="nama event libur"
          value={name}
          onChangeText={handleInputName}
        />
        <View style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
          {/* <Button onPress={() => showDatePicker()} title="pilih tanggal" /> */}
          <TouchableOpacity
            onPress={() => showDatePicker()}
            style={{
              backgroundColor: '#f4a21e',
              height: 40,
              width: 50,
              marginTop: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="ios-calendar" size={30} style={{color: 'white'}} />
          </TouchableOpacity>
          <TextInput
            style={[styles.input, {flex: 1}]}
            placeholder="pilih tanggal"
            value={dateFormat}
          />
        </View>
        <Button
          style={styles.buttonSubmit}
          title="Tambah Libur"
          onPress={handleSubmit}
          color="#f4511e"
        />

        {show && (
          <DateTimePicker
            testID="datePicker"
            timeZoneOffsetInMinutes={420}
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  wordingLogin: {fontSize: 25, fontWeight: 'bold'},
  containerForm: {width: '80%', marginTop: 10},
  input: {
    height: 40,
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5,
    borderColor: '#f4a21e',
  },
  buttonSubmit: {
    width: '100%',
    marginTop: 10,
  },
});

export default AddScreen;
