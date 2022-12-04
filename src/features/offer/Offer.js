import { useEffect, useMemo, useState } from 'react';

import ContentEditable from 'react-contenteditable';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import Form from 'react-bootstrap/Form';

import * as actions from './offerSlice'

import formatDate from '../../utils/formatDate'
import todayDate from '../../utils/todayDate'

import Document from '../general/Document'
import Requisites from './components/Requisites';
import Price from './components/Price';
import logo from '../../static/img/logo.png'
import Plan from './components/Plan';
import Guarantees from './components/Guarantees';
import OfferPersone from './components/OfferPersone';

const Offer = () => {

    const startOfDoc = useSelector(state => state.offer.startOfDoc)
    const term = useSelector(state => state.offer.term)
    const city = useSelector(state => state.offer.city)
    const date = useSelector(state => state.offer.date)

    const dispatch = useDispatch()

    const { setDateDocument, setCity, setStartOfDoc } = useMemo(
        () => bindActionCreators(actions, dispatch),
        [dispatch]
    )

    const [validDate, setValidDate] = useState('')

    const initDate = (date) => {
        let d = new Date(date);
        let t = new Date(d.setMonth(d.getMonth() + +term))

        term && term !== 0 && term !== '0' ? setValidDate(formatDate(t)) : setValidDate('бессрочно')
    }

    useEffect(() => {
        setDateDocument(todayDate())
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        initDate(date)
        // eslint-disable-next-line
    }, [term, date])

    return (
        <Document>
            <div className="offer__header">
                <img src={logo} alt="logo" className="offer__header_logo" />
                <Requisites />
            </div>

            <div className="offer__place">
                <Form.Control
                    style={{ width: '200px' }}
                    value={city}
                    onChange={event => setCity(event.target.value)}
                    placeholder="Город" />

                <Form.Control
                    style={{ width: '200px' }}
                    value={date}
                    type="date"
                    onChange={event => {
                        setDateDocument(event.target.value)
                    }} />
            </div>

            <h2 className="offer__title">Коммерческое предложение</h2>

            <div className="offer__text">
                <ContentEditable
                    tagName='span'
                    html={startOfDoc}
                    onChange={event => setStartOfDoc(event.target.value)}
                />
                <Price />
            </div>

            <Plan />

            <Guarantees />

            <p className="offer__text">
                Расчет стоимости является предварительным. Окончательный расчет производится непосредственно перед заключением договора.
            </p>

            {date && <p>Данное коммерческое предложение действительно {validDate === 'бессрочно' ? validDate : `до ${validDate}`}</p>}

            <OfferPersone />
        </Document>
    );
};

export default Offer;