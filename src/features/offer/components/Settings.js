import  {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from '../offerSlice'
import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';



const Settings = () => {
    const term = useSelector(state => state.term)
    const dispatch = useDispatch()

    const [terminable, setTerminable] = useState(false)

    const {setCheckedVAT, setTermValue} = bindActionCreators(actions, dispatch);


    return (
        <div className="settings">
            <Card.Title className='mb-2'>НДС</Card.Title>
            <Form.Check 
                className='mb-3'
                type="switch"
                id="vat"
                onChange={setCheckedVAT}
                label="С учетом НДС"
            />
            <hr/>
            <div className="settings__item span">
               <Card.Title className='mb-2'>Срок действия:</Card.Title>
               <Form.Check
                    label="бессрочный"
                    name="term"
                    type="radio"
                    id="perpetual"
                    onChange={() => {
                        setTerminable(false)
                        setTermValue(0)
                    } }
                />
                <Form.Check
                    className='mb-2'
                    label="срочный"
                    name="term"
                    type="radio"
                    id="terminable"
                    onChange={() => setTerminable(true)}
                />
                
                {terminable && <Form.Group>
                                    <Form.Label>Введите колличество месяцев</Form.Label>
                                    <Form.Control 
                                        value={term}
                                        onChange={(e) => dispatch(setTermValue(e.target.value))}
                                        type="number" 
                                        min="0"
                                        placeholder="Колличество месяцев" />
                                </Form.Group>
                }
                                    

            </div>
        </div>
    );
};

export default Settings;