import './Info.css';
import {Link} from 'react-router-dom';

const Info = ({room, users}) => {

    console.log(users)

    return (<div className="info">
        <div className="info__container">
            <h3>room: {room}</h3>
            <div className="info__users">
                users:
                {users.map((el, i) => {
                    if (users.length - 1 === i) {return ' ' + el.name}
                    return ' ' + el.name + ', ';
                })}
            </div>
            <Link className="info__close" to="/">X</Link>
        </div>
    </div>)
};

export default Info;