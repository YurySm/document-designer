import { useDispatch, useSelector } from "react-redux";
import { setRequisites } from "../offerSlice";
import { Form } from "react-bootstrap";
import setTextHeight from "../../../utils/setTextHeight";

const Requisites = () => {

    // const count = useSelector(selectCount);

    const requisites = useSelector(state => state.offer.requisites)
    const dispatch = useDispatch();

    return (
        <Form.Group className="offer__header_requisites">
            <Form.Control 
                as="textarea"
                value={requisites}
                onChange={event => {
                    dispatch(setRequisites(event.target.value))
                    setTextHeight(event.target)
                }} 
            rows={7} />
        </Form.Group>
    );
};

export default Requisites;