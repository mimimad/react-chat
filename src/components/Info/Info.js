import './Info.css';
import { Link } from 'react-router-dom';

const Info = ({ room }) => (
    <div className="info">
        <div className="info__leftContainer">
            <h3>room: {room}</h3>
        </div>
        <div className="info__rightContainer">
            <Link className="info__close" to="/">X</Link>
        </div>
    </div>
);

export default Info;