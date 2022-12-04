import {useEffect, useState} from 'react';
import {bindActionCreators} from "redux";
import {useDispatch, useSelector} from "react-redux";
import { nanoid } from '@reduxjs/toolkit';
import * as actions from "../offerSlice";

import { Button, Form, ListGroup } from 'react-bootstrap';

import setTextHeight from "../../../utils/setTextHeight";


const Guarantees = () => {
    const guaranteesItems = useSelector(state => state.offer.guaranteesItems)
    const dispatch = useDispatch()

    const { addGuaranteesItems } = bindActionCreators(actions, dispatch)

    const [guarantees, setGuarantees] = useState([...guaranteesItems])

    const addGuarantee = () => {
        setGuarantees([
            ...guarantees,
            {
                number: nanoid(),
                title: ''
            }
        ])
    }
    const removeGuarantee = (number) => {
        setGuarantees(guarantees.filter(i => i.number !== number))
    }

    const changeGuarantees= (key, value, number) => {
        setGuarantees(guarantees.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    useEffect(() => {
        addGuaranteesItems(guarantees)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [guarantees])

    return (
        <div className="offer__guarantees">
            <div className="offer__guarantees_wrapper">
                <h2 className="offer__guarantees_title">
                    Мы гарантируем:
                </h2>
                <Button onClick={() => addGuarantee()}>
                        Добавить новый пункт
                </Button>
            </div>

            <ListGroup className='mt-3' as="ol" numbered>
                {
                    guarantees.map(i =>
                        <ListGroup.Item
                            key={i.number}
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <Form.Control 
                                    as="textarea"
                                    value={i.title}
                                    onChange={event => {
                                        changeGuarantees('title', event.target.value, i.number)
                                        setTextHeight(event.target)
                                    }}
                                     rows={1} 
                                     placeholder="Введите гарантию"/>

                                <Button 
                                    className='ms-2'
                                    variant='danger'
                                    onClick={() => removeGuarantee(i.number)}>
                                    X
                                </Button>
                                
                        </ListGroup.Item>
                    )
                }
            </ListGroup>
        </div>
    );
};

export default Guarantees;