import  {useEffect, useState} from 'react';
import { Form } from 'react-bootstrap';
import { useSelector} from "react-redux";
import intToWords from "../../../utils/intToWords";

const Numbers = () => {
    const checkVat = useSelector(state => state.offer.checkVat)
    const totalPrice = useSelector(state => state.offer.totalPrice)

    const [num, setNum] = useState(0)
    const [vat, setVat] = useState(0)  
    const [penny, setPenny] = useState(0)

    const initVat = (number) => {
        let value = Math.trunc(+number * 20 / 120)
        let penny = Math.round(((+number * 20 / 120) - value).toFixed(2) * 100)

        return [value, penny]
    }

    useEffect(() => {
        setNum(totalPrice)
    }, [totalPrice])


    useEffect(() => {
        setVat(initVat(num)[0])
        setPenny(initVat(num)[1])
    }, [num])

    return (
        <span>
            &nbsp;
            <Form.Control
                style={{width:"170px", display: 'inline'}}
                disabled
                value={num}
                onChange={e => setNum(e.target.value)}
                type="number" 
                min="0"
                placeholder="Колличество месяцев" />&nbsp;
            руб. (<span>{intToWords(num, )}</span> руб.)

            {
                checkVat ?
                    <span>
                        , в том числе НДС: &nbsp;
                        <span>{vat}</span> руб. &nbsp;
                        <span>{
                            penny < 10 ? `0${penny}` : penny
                        }</span> копеек.
                    </span>
                 : null
            }
        </span>
    );
};

export default Numbers;