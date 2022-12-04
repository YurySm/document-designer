import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const LinkToMain = () => {
    return (
        <Link className="ms-2" style={{ marginLeft: ' 10px' }} to="/">
            <Button variant="danger">На главную</Button>
        </Link>
    );
};

export default LinkToMain;