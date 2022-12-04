import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { Form } from "react-bootstrap";
import SetTextHeight from "../../../utils/setTextHeight";
import * as actions from "../offerSlice";



const OfferPersone = () => {

    const jobTitle = useSelector(state => state.jobTitle)
    const employee = useSelector(state => state.employee)
    const dispatch = useDispatch();
    const { setjobTitle, setEmployee } = useMemo(
        () => bindActionCreators(actions, dispatch),
        [dispatch]
    )

    return (
        <Form.Group className="persone__wrapper d-flex mt-5 align-items-end">
            <Form.Control 
                as="textarea"
                value={jobTitle}
                placeholder="Должность"
                onChange={event => {
                    setjobTitle(event.target.value)
                    SetTextHeight(event.target)
                }} 
            rows={1} />

            <div className="persone__divider"></div>

            <Form.Control 
                type="text"
                placeholder="Ф.И.О"
                value={employee}
                onChange={event => {
                    setEmployee(event.target.value)
                }} 
            rows={7} />
        </Form.Group>
    );
};

export default OfferPersone;