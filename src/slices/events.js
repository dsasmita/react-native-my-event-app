import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  hasErrors: false,
  events: [
    {
      key: 'a1',
      name: 'Tahun Baru 2020 Masehi',
      date_time: '2020-01-01T00:00+07:00',
    },
    {
      key: 'a2',
      name: 'Kenaikan Isa Al Masih',
      date_time: '2020-05-21T00:00+07:00',
    },
    {
      key: 'a3',
      name: 'Hari Raya Idul Fitri 1441 Hijriyah',
      date_time: '2020-05-24T00:00+07:00',
    },
    {
      key: 'a4',
      name: 'Hari Lahir Pancasila',
      date_time: '2020-06-01T00:00+07:00',
    },
    {
      key: 'a5',
      name: 'Hari Raya Idul Adha 1441 Hijriyah',
      date_time: '2020-07-31T00:00+07:00',
    },
    {
      key: 'a6',
      name: 'Hari Kemerdekaan RI',
      date_time: '2020-08-17T00:00+07:00',
    },
    {
      key: 'a7',
      name: 'Tahun Baru Islam 1442 Hijriyah',
      date_time: '2020-08-20T00:00+07:00',
    },
    {
      key: 'a8',
      name: 'Maulid Nabi Muhammad SAW',
      date_time: '2020-10-29T00:00+07:00',
    },
  ],
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, {payload}) => {
      state.events = payload;
    },
  },
});

export const {setEvents} = eventsSlice.actions;

export const eventsSelector = (state) => state.events;

export default eventsSlice.reducer;
