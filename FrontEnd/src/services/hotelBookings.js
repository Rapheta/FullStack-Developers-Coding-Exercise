import { ActionCreators } from '../redux/hotelBookingsReducer';
import axiosInstance from '../axiosInstance';

export const GetHotelBookings = async (dispatch) => {
    try{
        const { data } = await axiosInstance.get('hotelBookings/');
        dispatch(ActionCreators.setHotelBookings(data));
    } catch {
        console.log('Error!');
    }
}

export const DeleteHotelBooking = async (dispatch, hotelBooking) => {
    try{
        await axiosInstance.delete(`hotelBookings/${hotelBooking.id}`);
        dispatch(ActionCreators.deleteHotelBooking(hotelBooking));
    } catch {
        console.log('Error!');
    }
}

export const NewHotelBooking = async (dispatch, hotelBooking) => {
    try{
        const { data } = await axiosInstance.post('hotelBookings/',hotelBooking);
        dispatch(ActionCreators.newHotelBooking(data));
    } catch {
        console.log('Error!');
    }
}

export const EditHotelBooking = async (dispatch, hotelBooking) => {
    try{
        await axiosInstance.put('hotelBookings/', hotelBooking);
        dispatch(ActionCreators.editHotelBooking(hotelBooking));
    } catch {
        console.log('Error!');
    }
}