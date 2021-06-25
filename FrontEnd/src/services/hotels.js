import { ActionCreators } from '../redux/hotelsReducer';
import axiosInstance from '../axiosInstance';

export const GetHotels = async (dispatch) => {
    try{
        const { data } = await axiosInstance.get('hotels/');
        dispatch(ActionCreators.setHotels(data));
    } catch {
        console.log('Error!');
    }
}

export const EditHotel = async (dispatch, hotel) => {
    try{
        await axiosInstance.put('hotels/', hotel);
        dispatch(ActionCreators.editHotel(hotel));
    } catch {
        console.log('Error!');
    }
}