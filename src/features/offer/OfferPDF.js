import { useSelector } from "react-redux";
import { PDFViewer } from '@react-pdf/renderer';
import formatDate from "../../utils/formatDate";
import OfferPDFBody from './components/OfferPDFBody';

const OfferPDF = () => {

    const startOfDoc = useSelector(state => state.offer.startOfDoc)
    const planItems = useSelector(state => state.offer.planItems)
    const guaranteesItems = useSelector(state => state.offer.guaranteesItems)
    const term = useSelector(state => state.offer.term)
    const requisites = useSelector(state => state.offer.requisites)
    const city = useSelector(state => state.offer.city)
    const date = useSelector(state => state.offer.date)
    const totalPrice = useSelector(state => state.offer.totalPrice)
    const checkVat = useSelector(state => state.offer.checkVat)
    const jobTitle = useSelector(state => state.offer.jobTitle)
    const employee = useSelector(state => state.offer.employee)

    let trueDate = formatDate(new Date(date))

    return (
        <PDFViewer width={'100%'} height={`${document.body.clientHeight - 90}px`} style={{marginTop: '40px'}}>
            <OfferPDFBody
                planItems={planItems}
                guaranteesItems={guaranteesItems}
                term={term}
                city={city}
                date={trueDate}
                requisites={requisites}
                totalPrice={totalPrice}
                checkVat={checkVat}
                startOfDoc={startOfDoc}
                jobTitle={jobTitle}
                employee={employee}
            />
        </PDFViewer>
    );
};

export default OfferPDF;