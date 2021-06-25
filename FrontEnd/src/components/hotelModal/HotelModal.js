import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Form, Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { EditHotel } from "../../services/hotels";
import "./hotelModal.css";

export const EditHotelModal = ({ hotel }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div>
        <Button onClick={handleShow} className='btn btn-info'>Edit</Button>
        <HotelModal hotel={hotel} handleFormSubmit={EditHotel} show={show} handleClose={handleClose}/>
    </div>
}

const HotelModal = ({hotel, handleFormSubmit, show, handleClose}) => {
    
    const [modalHotel, setModalHotel] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
        setModalHotel(hotel);
    }, [hotel]);

    return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="text-dark" closeButton>
            <Modal.Title>Edit Hotel</Modal.Title>
          </Modal.Header>
            <Form onSubmit={event => {
                event.preventDefault();
                handleFormSubmit(dispatch, modalHotel);
            }}>
            <Modal.Body>
                <div>
                    <InputGroup className="mb-3 row">
                        <label htmlFor="basic-1" className="col-3 text-dark modal-label">Name</label>
                        <FormControl className="col-9" value={modalHotel === null ? '' : modalHotel.name} onChange={(e) => {
                            setModalHotel({ ...modalHotel, name: e.target.value });
                         }} id="basic-1" aria-describedby="basic-addon3"/>

                    </InputGroup>

                    <InputGroup className="mb-3 row">
                        <label htmlFor="basic-2" className="col-3 text-dark modal-label">Address</label>
                        <FormControl className="col-9" value={modalHotel === null ? '' : modalHotel.address} onChange={(e) => {
                            setModalHotel({ ...modalHotel, address: e.target.value });
                        }} id="basic-2" aria-describedby="basic-addon3"/>
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
  