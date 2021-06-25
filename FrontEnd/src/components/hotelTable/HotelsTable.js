import React, { useEffect } from 'react';
import { useSelector, useDispatch }  from 'react-redux';
import { GetHotels } from '../../services/hotels';
import { EditHotelModal } from '../../components/hotelModal/HotelModal';
import './hotelsTable.css'; 

export const HotelsTable = () => {
    const hotels = useSelector(state => state.hotelsReducer.hotels);
    const dispatch = useDispatch();

    useEffect(() => {
        GetHotels(dispatch);
    }, []);

    return <table className="table">
        <caption>Total results: {hotels.length}</caption>
        <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
            {
                hotels.map(h =>
                    <tr>
                        <td style={{textAlign: 'left'}}>{h.name}</td>
                        <td style={{textAlign: 'left'}}>{h.address}</td>
                        <td scope="col" className="editAction">
                            <EditHotelModal hotel={h}/>
                        </td>
                    </tr>)
            }
        </tbody>
    </table>
}