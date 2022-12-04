import  { useState } from 'react';
import Settings from "./Settings";
import {Link, useLocation} from "react-router-dom";
import OfferDocx from './OfferDocx';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Col } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';



const OfferHeader = ({children}) => {
    const location = useLocation();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                {/* <Navbar.Brand href="#">Коммерческое предложение</Navbar.Brand> */}
                <Nav className="justify-content-between w-100">
                    <Col md={10}>
                        <Button variant="primary" onClick={handleShow}>
                            Настройки
                        </Button>
                        {
                            location.pathname === '/offer' ? 
                                <Link className="ms-2" variant="primary" style={{marginLeft:' 10px'}} to="/offer/offer-pdf">
                                    <Button variant="primary">Предпросмотр PDF</Button>
                                </Link> 
                                : 
                                <Link className="ms-2" style={{marginLeft:' 10px'}} to="/offer">
                                    <Button variant="primary">Коструктор</Button>
                                </Link>
                        } 

                        {
                            // location.pathname === '/build/offer' ? 
                            //     <Link className="ms-2" variant="primary" style={{marginLeft:' 10px'}} to="/build/offer/offer-pdf">
                            //         <Button variant="primary">Предпросмотр PDF</Button>
                            //     </Link> 
                            //     : 
                            //     <Link className="ms-2" style={{marginLeft:' 10px'}} to="/build/offer">
                            //         <Button variant="primary">Коструктор</Button>
                            //     </Link>
                        }
                        <OfferDocx/>
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
                    <Settings/>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default OfferHeader;