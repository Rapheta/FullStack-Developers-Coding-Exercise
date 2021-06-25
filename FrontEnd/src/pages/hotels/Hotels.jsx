import React from 'react'
import './hotels.css';
import { HotelsTable } from '../../components/hotelTable/HotelsTable.js';

export default function hotels() {
    return (
        <div>
            <h3 className="title">Hotels List</h3>
            <div className="App-list">
                <HotelsTable/>
            </div>
        </div>
    )
}
