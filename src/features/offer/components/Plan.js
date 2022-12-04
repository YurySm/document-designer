import  {useEffect, useState} from 'react';
import {bindActionCreators} from "redux";
import {useDispatch, useSelector} from "react-redux";
import { nanoid } from '@reduxjs/toolkit';
import * as actions from "../offerSlice";
import setTextHeight from "../../../utils/setTextHeight";
import { Button, Form, ListGroup } from 'react-bootstrap';



const Plan = () => {
    const planItems = useSelector(state => state.offer.planItems)
    const dispatch = useDispatch()
    const { calcTotalPrice, addPlanItems } = bindActionCreators(actions, dispatch)

    

    const [plan, setPlan] = useState([...planItems])

    const addPlan = () => {
        setPlan([
            ...plan,
            {
                title:'',
                price: 0,
                number: nanoid()
            }
        ])
    }

    const changePlan = (key, value, number) => {
        setPlan(plan.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const removePlan = (number) => {
        setPlan(plan.filter(i => i.number !== number))
    }

    useEffect(() => {
        const sumPrice = (arr) => {
            let total = 0
            arr.forEach(item => {
                total = +item.price + +total
                return total
            })
            return total
        }
        addPlanItems(plan)
        calcTotalPrice(sumPrice(plan))
         // eslint-disable-next-line
    }, [plan])

    return (
        <div className="offer__plan">
            <div className="offer__plan_wrapper">
                <h2 className="offer__plan_title">
                    План работ:
                </h2>
                <Button onClick={() => addPlan()}>
                        Добавить новый пункт
                </Button>
            </div>

            <ListGroup className='mt-3' as="ol" numbered>
                {
                    plan.map(i =>
                        <ListGroup.Item
                            key={i.number}
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <Form.Control 
                                    as="textarea"
                                    rows={1}
                                    value={i.title}
                                    onChange={event => {
                                        changePlan('title', event.target.value, i.number)
                                        setTextHeight(event.target)
                                    }}
                                    placeholder="Введите название задачи"/>

                                <div>
                                    <span>&nbsp;</span>
                                    <span>&mdash;</span>
                                    <span>&nbsp;</span> 
                                </div>

                                <Form.Control
                                    style={{width:"170px", display: 'inline'}}
                                    type="number" 
                                    min="0"
                                    value={i.price}
                                    onChange={event => changePlan('price', event.target.value, i.number)}
                                    title="Cтоимость задачи" /><span>&nbsp;руб.</span>

                                <Button 
                                    className='ms-2'
                                    variant='danger'
                                    onClick={() => removePlan(i.number)}>
                                    X
                                </Button>
                        </ListGroup.Item>
                    )
                }
            </ListGroup>

        </div>
    );
};

export default Plan;