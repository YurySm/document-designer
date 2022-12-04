import { useSelector } from "react-redux";

import formatDate from "../../utils/formatDate";
import { PDFViewer } from "../../utils/reactpdf";
import OfferPayPDFBody from "./components/OfferPayPDFBody";

const VacationNoPayPDF = () => {
    const dateOfferPay = useSelector(state => state.offerPay.dateOfferPay)
    const docText = useSelector(state => state.offerPay.docText)
    const fullName = useSelector(state => state.offerPay.fullName)
    const requisites = useSelector(state => state.offerPay.requisites)

    let trueDate = formatDate(new Date(dateOfferPay))
    return (
        <PDFViewer width={'100%'} height={`${document.body.clientHeight - 90}px`} style={{ marginTop: '40px' }}>
            <OfferPayPDFBody
                date={trueDate}
                requisites={requisites}
                docText={docText}
                fullName={fullName}
            />
        </PDFViewer>
    );
};

export default VacationNoPayPDF;