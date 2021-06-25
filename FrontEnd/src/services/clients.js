import { ActionCreators } from '../redux/clientsReducer';
import axiosInstance from '../axiosInstance';

export const GetClients = async (dispatch) => {
    try{
        const { data } = await axiosInstance.get('clients/');
        dispatch(ActionCreators.setClients(data));
    } catch {
        console.log('Error!');
    }
}

export const EditClient = async (dispatch, client) => {
    try{
        await axiosInstance.put('clients/', client);
        dispatch(ActionCreators.editClient(client));
    } catch {
        console.log('Error!');
    }
}