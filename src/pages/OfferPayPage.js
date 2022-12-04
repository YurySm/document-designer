import { Route, Routes } from 'react-router-dom';
import LinkToMain from '../features/general/LinkToMain';
import OfferPayHeader from '../features/offerPay/components/OfferPayHeader'
import OfferPay from '../features/offerPay/OfferPay';
import OfferPayPDF from '../features/offerPay/OfferPayPDF';

const OfferPayPage = () => {
    return (
        <>
            <OfferPayHeader>
                <LinkToMain />
            </OfferPayHeader>

            <Routes>
                <Route path="/" element={<OfferPay />} />
                <Route path="/pdf" element={<OfferPayPDF />} />
            </Routes>
        </>
    );
};

export default OfferPayPage;