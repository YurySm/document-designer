import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { setRequisites } from '../offerPaySlice';
import Form from 'react-bootstrap/Form';
import SetTextHeight from '../../../utils/setTextHeight';

const OfferPayRequisites = () => {
    const requisites = useSelector(state => state.offerPay.requisites)
    const dispatch = useDispatch()
    const bindSetRequisites = bindActionCreators(dispatch, setRequisites)
    return (
        <Form.Group className="offer-pay__requisites">
            <Form.Control
                as="textarea"
                value={requisites}
                onChange={event => {
                    bindSetRequisites((event.target.value))
                    SetTextHeight(event.target)
                }}
                rows={4} />
        </Form.Group>
    );
};

export default OfferPayRequisites;