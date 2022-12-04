import OfferHeader from '../features/offer/components/OfferHeader';
import Offer from '../features/offer/Offer';
import { Route, Routes} from "react-router-dom";
import OfferPDF from '../features/offer/OfferPDF';
import LinkToMain from '../features/general/LinkToMain';

const OfferPage = () => {
    return (
        <>
            <OfferHeader>
                <LinkToMain/>
            </OfferHeader>
            <Routes>
                <Route path="/" element={<Offer />} />
                <Route path="/offer-pdf" element={<OfferPDF />} />
            </Routes>
        </>
    );
};

export default OfferPage;