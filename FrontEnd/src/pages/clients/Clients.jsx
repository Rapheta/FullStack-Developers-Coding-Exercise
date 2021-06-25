import React from 'react'
import './clients.css';
import { ClientsTable } from '../../components/clientTable/ClientsTable.js'

export default function clients() {
    return (
        <div>
            <h3 className="title">Clients List</h3>
            <div className="App-list">
                <ClientsTable/>
            </div>
        </div>
    )
}
