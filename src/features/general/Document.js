import { Container } from "react-bootstrap";


const Document = ({children, tax}) => {
    return (
        <div className={`document ${tax}`}>
            <Container>
                <div className='document__wrapper'>
                    {children}
                </div>
            </Container>
        </div>

    );
};

export default Document;