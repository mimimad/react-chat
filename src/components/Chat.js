import {useState, useEffect} from "react";
import queryString from "query-string";
import io from "socket.io-client";

let socket;

function Chat({ location }) {
    const [isCurrentUser, setCurrentUser] = useState('');
    const [isCurrentRoom, setCurrentRoom] = useState('');
    const ENDPOINT = 'localhost:8000';

    useEffect(() => {
        const {name, room} = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setCurrentUser(name);
        setCurrentRoom(room);

socket.emit('join', { name, room });
    }, [ENDPOINT, location.search])

    return (
        <div className="chat">
            <div className="chat__users">
                <b>Online ():</b>
                <ul>

                </ul>
            </div>
            <div className="chat__messages">
                <div className="messages">
                    <div className="message">
                        <p>Lorem Ipsulum</p>
                        <div>
                            <span>test user</span>
                        </div>
                    </div>
                </div>
                <div className="messages">
                    <div className="message">
                        <p>Lorem Ipsulum</p>
                        <div>
                            <span>test user</span>
                        </div>
                    </div>
                </div>
            </div>
            <form action="">
                <textarea
                className="chat__textarea">

                </textarea>
                <button type="button" className="btn btn-primary">
                    Send
                </button>
            </form>
        </div>
    )
}

export default Chat;