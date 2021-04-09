import {useState, useEffect} from "react";
import queryString from "query-string";
import io from "socket.io-client";
import './Chat.css';

const ENDPOINT = 'localhost:8000';

let socket;

function Chat({location}) {
    const [currentUser, setCurrentUser] = useState('');
    const [currentRoom, setCurrentRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const {name, room} = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setCurrentUser(name);
        setCurrentRoom(room);

        socket.emit('join', {name, room}, (error) => {
            if(error) {
                alert(error);
            }
        },[ENDPOINT, location.search]);

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });

        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, []);

    function sendMessage(e) {
        e.preventDefault();
        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    function handleMessageInput(e) {
        setMessage(e.target.value);
    }

    function handleEnterSubmit(e) {
        e.key === 'Enter' && sendMessage(e)
    }

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
                    className="chat__textarea"
                    onChange={handleMessageInput}
                    onKeyPress={handleEnterSubmit}
                />


                <button type="button" className="btn btn-primary">
                    Send
                </button>
            </form>
        </div>
    )
}

export default Chat;