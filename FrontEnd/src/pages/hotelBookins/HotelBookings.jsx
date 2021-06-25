import React from 'react'
import './hotelBookings.css';
import { NewHotelBookingModal } from '../../components/hotelBookingModal/HotelBookingModal';
import { HotelBookingsTable } from '../../components/hotelBookingTable/HotelBookingsTable';

export default function hotelBookings() {
    return (
        <div>
            <h3 className="title">Hotel Bookings List</h3>
            <div className="App-list">
                <div className="App-createItem">
                    <NewHotelBookingModal/>
                </div>
                <HotelBookingsTable/>
            </div>
        </div>
    )
}
