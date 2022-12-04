import React, { useEffect, useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import ContentEditable from 'react-contenteditable';
import { Form, Row } from 'react-bootstrap';

import * as actions from './offerPaySlice';
import OfferPayRequisites from './components/OfferPayRequisites';
import todayDate from '../../utils/todayDate';
import Document from '../general/Document';


const OfferPay = () => {
    const dateOfferPay = useSelector(state => state.offerPay.dateOfferPay)
    const docText = useSelector(state => state.offerPay.docText)
    const fullName = useSelector(state => state.offerPay.fullName)

    const dispatch = useDispatch()
    const { setDocText, setFullName, setDateOfferPay } = useMemo(
        () => bindActionCreators(actions, dispatch),
        [dispatch]
    )

    useEffect(() => {
        setDateOfferPay(todayDate())
        // eslint-disable-next-line
    }, [])

    return (
        <Document>
            <Row className='justify-content-end'>
                <OfferPayRequisites />
            </Row>

            <h5 className='offer-pay__title text-center mt-5'>
                ЗАЯВЛЕНИЕ
            </h5>

            <p className='offer-pay__text'>
                <ContentEditable
                    tagName='span'
                    html={docText}
                    onChange={event => setDocText(event.target.value)}
                />
            </p>

            <Row className='justify-content-start mt-5'>
                <div style={{ width: '150px', borderBottom: '1px solid #000' }}>

                </div>
                <Form.Control
                    className='ms-2'
                    style={{ width: "220px", display: 'inline' }}
                    type="text"
                    value={fullName}
                    onChange={event => setFullName(event.target.value)}
                    placeholder="Ф.И.О." />
            </Row>

            <Row className='mt-5'>
                <Form.Control
                    style={{ width: '200px' }}
                    value={dateOfferPay}
                    type="date"
                    onChange={event => {
                        setDateOfferPay(event.target.value)
                    }} />
            </Row>
        </Document>
    );
};

export default OfferPay;