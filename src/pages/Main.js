import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const Main = () => {
    return (
        <div className='main-page'>
            <Container className='pt-4'>
                <h1 className='main-page__title fw-bold text-center lh-lg'>
                    Конструктор документов
                </h1>
                <Row className="justify-content-md-center flex-wrap mt-3">
                    <Card
                        bg='info'
                        text={'white'}
                        style={{ width: '18rem' }}
                        className="m-3">
                        <Link to="offer" style={{ color: '#fff', textDecoration: 'none' }}>
                            <Card.Body>
                                <Card.Title>Пример коммерческого предложение</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>

                    <Card
                        bg='success'
                        text={'white'}
                        style={{ width: '18rem' }}
                        className="m-3">
                        <Link to="offer-pay" style={{ color: '#fff', textDecoration: 'none' }}>
                            <Card.Body>
                                <Card.Title>Заявление на отпуск</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>
                </Row>
            </Container>
        </div>

    );
};

export default Main;