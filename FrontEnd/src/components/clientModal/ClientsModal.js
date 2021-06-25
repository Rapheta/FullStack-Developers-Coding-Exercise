import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Form, Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { EditClient } from "../../services/clients";
import "./clientsModal.css";

export const EditClientModal = ({ client }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div>
        <Button onClick={handleShow} className='btn btn-info'>Edit</Button>
        <ClientModal client={client} handleFormSubmit={EditClient} show={show} handleClose={handleClose}/>
    </div>
}

const ClientModal = ({client, handleFormSubmit, show, handleClose}) => {
    
    const [modalClient, setModalClient] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
        setModalClient(client);
    }, [client]);

    return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="text-dark" closeButton>
            <Modal.Title>Edit Client</Modal.Title>
          </Modal.Header>
            <Form onSubmit={event => {
                event.preventDefault();
                handleFormSubmit(dispatch, modalClient);
            }}>
            <Modal.Body>
                <div>
                    <InputGroup className="mb-3 row">
                        <label htmlFor="basic-1" className="col-3 text-dark modal-label">Name</label>
                        <FormControl className="col-9" value={modalClient === null ? '' : modalClient.name} onChange={(e) => {
                            setModalClient({ ...modalClient, name: e.target.value });
                         }} id="basic-1" aria-describedby="basic-addon3"/>

                    </InputGroup>

                    <InputGroup className="mb-3 row">
                        <label htmlFor="basic-2" className="col-3 text-dark modal-label">Address</label>
                        <FormControl className="col-9" value={modalClient === null ? '' : modalClient.address} onChange={(e) => {
                            setModalClient({ ...modalClient, address: e.target.value });
                        }} id="basic-2" aria-describedby="basic-addon3"/>
                    </InputGroup>

                    <InputGroup className="mb-3 row">
                        <label htmlFor="basic-2" className="col-3 text-dark modal-label">Phone</label>
                        <FormControl className="col-9" value={modalClient === null ? '' : modalClient.phone} onChange={(e) => {
                            setModalClient({ ...modalClient, phone: e.target.value });
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