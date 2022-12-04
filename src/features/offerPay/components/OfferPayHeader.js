import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Col } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import OfferPayDocx from './OfferPayDocx';


const VacationNoPayHeader = ({ children }) => {
    const location = useLocation();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Nav className="justify-content-between w-100">
                        <Col ms={10}>
                            {
                                location.pathname === '/offer-pay' ?
                                    <Link className="ms-2" variant="primary" style={{ marginLeft: ' 10px' }} to="/offer-pay/pdf">
                                        <Button variant="primary">Предпросмотр PDF</Button>
                                    </Link>
                                    :
                                    <Link className="ms-2" style={{ marginLeft: ' 10px' }} to="/offer-pay">
                                        <Button variant="primary">Коструктор</Button>
                                    </Link>
                            }
                            <OfferPayDocx />
                        </Col>
                        <Col className="d-flex justify-content-end">
                            {children}
                        </Col>
                    </Nav>
                </Container>
            </Navbar>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Настройки</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {/* <Settings/> */}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default VacationNoPayHeader;