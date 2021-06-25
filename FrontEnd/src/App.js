import React, {useState} from 'react';
import './App.css';
import { Tabs, Tab } from "react-bootstrap";
import HotelBooking from './pages/hotelBookins/HotelBookings';
import Hotel from './pages/hotels/Hotels';
import Client from './pages/clients/Clients';

const App = () => {
  const [key, setKey] = useState('hotelBookings');
  return (
    <div className="App">
      <div className="container">
        <h1 className="App-mainTitle">Full-Stack Developers Coding Exercise</h1>

        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-12"
        >
          <Tab eventKey="hotelBookings" title="Hotel Bookings">
            <HotelBooking/>
          </Tab>
          <Tab eventKey="hotels" title="hotels">
            <Hotel/>
          </Tab>
          <Tab eventKey="clients" title="clients">
            <Client/>
          </Tab>
        </Tabs>
        </div>
    </div>
  );
}

export default App;
