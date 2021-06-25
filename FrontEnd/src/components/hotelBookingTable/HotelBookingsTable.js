import React, { useEffect } from 'react';
import { useSelector, useDispatch }  from 'react-redux';
import { GetHotelBookings, DeleteHotelBooking } from '../../services/hotelBookings';
import { Button } from 'react-bootstrap';
import { EditHotelBookingModal } from '../../components/hotelBookingModal/HotelBookingModal';
import './hotelBookingsTable.css'; 

export const HotelBookingsTable = () => {
    const hotelBookings = useSelector(state => state.hotelBookingsReducer.hotelBookings);
    const dispatch = useDispatch();

    useEffect(() => {
        GetHotelBookings(dispatch);
    }, []);

    return <table className="table">
        <caption>Total results: {hotelBookings.length}</caption>
        <thead>
        <tr>
            <th className="col-1">Booking</th>
            <th className="col-2">Address</th>
            <th className="col-2">Date</th>
            <th className="col-3">Hotel Name</th>
            <th className="col-2">Client Name</th>
            <th className="col-1"></th>
            <th className="col-1"></th>
        </tr>
        </thead>
        <tbody>
            {
                hotelBookings.map(hb =>
                    <tr>
                        <td style={{textAlign: 'left'}}>{hb.description}</td>
                        <td style={{textAlign: 'left'}}>{hb.address}</td>
                        <td style={{textAlign: 'left'}}>{hb.createdDate.substring(0, 10)}</td>
                        <td className="col-3" style={{textAlign: 'left'}}>{hb.hotelName}</td>
                        <td className="col-2" style={{textAlign: 'left'}}>{hb.clientName}</td>
                        <td className="editAction">
                            <EditHotelBookingModal hb={hb}/>
                        </td>
                        <td className="deleteAction">
                            <Button className='btn btn-danger' onClick={() => DeleteHotelBooking(dispatch, hb)}>Delete</Button>
                        </td>
                    </tr>)
            }
        </tbody>
    </table>
}