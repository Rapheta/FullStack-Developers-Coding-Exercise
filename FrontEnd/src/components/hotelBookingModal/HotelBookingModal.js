import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Modal, Button, InputGroup, FormControl, DropdownButton, Dropdown } from "react-bootstrap";
import { NewHotelBooking, EditHotelBooking } from "../../services/hotelBookings";
import { GetHotels } from '../../services/hotels';
import { GetClients } from '../../services/clients';
import "./hotelBookingModal.css";

export const NewHotelBookingModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div>
        <Button onClick={handleShow} className='btn btn-success'>New Hotel Booking</Button>
        <HotelBookingModal hb={null} handleFormSubmit={NewHotelBooking} show={show} handleClose={handleClose}/>
    </div>
}

export const EditHotelBookingModal = ({ hb }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div>
        <Button onClick={handleShow} className='btn btn-info'>Edit</Button>
        <HotelBookingModal hb={hb} handleFormSubmit={EditHotelBooking} show={show} handleClose={handleClose}/>
    </div>
}

const HotelBookingModal = ({hb, handleFormSubmit, show, handleClose}) => {
    
    const [modalHotelBooking, setModalHotelBooking] = useState({});
    const hotels = useSelector(state => state.hotelsReducer.hotels);
    const clients = useSelector(state => state.clientsReducer.clients);

    const dispatch = useDispatch();

    useEffect(() => {
        setModalHotelBooking(hb);
        GetHotels(dispatch);
        GetClients(dispatch);
    }, [hb]);

    return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="text-dark" closeButton>
            <Modal.Title>{modalHotelBooking === null ? 'Create' : 'Edit'} Hotel Booking</Modal.Title>
          </Modal.Header>
            <Form onSubmit={event => {
                event.preventDefault();
                handleFormSubmit(dispatch, modalHotelBooking);
            }}>
            <Modal.Body>
                <div>
                    <InputGroup className="mb-3 row">
                        <label htmlFor="basic-1" className="col-3 text-dark modal-label">Description</label>
                        <FormControl className="col-9" value={modalHotelBooking === null ? '' : modalHotelBooking.description} onChange={(e) => {
                            setModalHotelBooking({ ...modalHotelBooking, description: e.target.value });
                         }} id="basic-1" aria-describedby="basic-addon3"/>

                    </InputGroup>

                    <InputGroup className="mb-3 row">
                        <label htmlFor="basic-2" className="col-3 text-dark modal-label">Address</label>
                        <FormControl className="col-9" value={modalHotelBooking === null ? '' : modalHotelBooking.address} onChange={event => setModalHotelBooking({ ...modalHotelBooking, address: event.target.value })} id="basic-2" aria-describedby="basic-addon3"/>
                    </InputGroup>
                    
                    <InputGroup className="mb-3 row">
                        <label htmlFor="basic-4" className="col-3 text-dark modal-label">Hotel</label>
                        <DropdownButton id="dropdown-basic-button" title="Dropdown button" onSelect={(e) => {
                            setModalHotelBooking({ ...modalHotelBooking, hotelId: parseInt(e), hotelName: hotels.find(x => x.id === parseInt(e)).name });
                        }}>
                            {hotels.map(data =>(
                                <Dropdown.Item eventKey={data.id}>{data.name}</Dropdown.Item>
                            ))}
                        </DropdownButton>
                        <FormControl disabled className="col-6 ml-3" value={modalHotelBooking === null ? '' : modalHotelBooking.hotelName} id="basic-4" aria-describedby="basic-addon3"/>
                    </InputGroup>

                    <InputGroup className="mb-3 row">
                        <label htmlFor="basic-5" className="col-3 text-dark modal-label">Client</label>
                        <DropdownButton id="dropdown-basic-button" title="Dropdown button" onSelect={(e) => {
                            setModalHotelBooking({ ...modalHotelBooking, clientId: parseInt(e), clientName: clients.find(x => x.id === parseInt(e)).name });
                        }}>
                            {clients.map(data =>(
                                <Dropdown.Item eventKey={data.id}>{data.name}</Dropdown.Item>
                            ))}
                        </DropdownButton>
                        <FormControl disabled className="col-6 ml-3" value={modalHotelBooking === null ? '' : modalHotelBooking.clientName} id="basic-5" aria-describedby="basic-addon3"/>
                    </InputGroup>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button type="submit" variant="primary" onClick={handleClose}>Save</Button>
            </Modal.Footer>
          </Form>
        </Modal>
    );
  }
  