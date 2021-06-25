import { configureStore } from '@reduxjs/toolkit';
import HotelBookingsReducer from './hotelBookingsReducer';
import HotelsReducer from './hotelsReducer';
import ClientsReducer from './clientsReducer';

export const store = configureStore({
  reducer: {
    hotelBookingsReducer: HotelBookingsReducer,
    hotelsReducer: HotelsReducer,
    clientsReducer: ClientsReducer,
  },
});
