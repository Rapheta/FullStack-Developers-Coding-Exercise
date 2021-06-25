import React, { useEffect } from 'react';
import { useSelector, useDispatch }  from 'react-redux';
import { GetClients } from '../../services/clients';
import { EditClientModal } from '../../components/clientModal/ClientsModal.js';
import './clientsTable.css'; 

export const ClientsTable = () => {
    const clients = useSelector(state => state.clientsReducer.clients);
    const dispatch = useDispatch();

    useEffect(() => {
        GetClients(dispatch);
    }, []);

    return <table className="table">
        <caption>Total results: {clients.length}</caption>
        <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
            {
                clients.map(c =>
                    <tr>
                        <td style={{textAlign: 'left'}}>{c.name}</td>
                        <td style={{textAlign: 'left'}}>{c.address}</td>
                        <td style={{textAlign: 'left'}}>{c.phone}</td>
                        <td scope="col" className="editAction">
                            <EditClientModal client={c}/>
                        </td>
                    </tr>)
            }
        </tbody>
    </table>
}