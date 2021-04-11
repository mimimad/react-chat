import {useState, useEffect} from "react";
import queryString from "query-string";
import socket from "../../utils/socket";
import "./Chat.css";
import Info from "../Info/Info";
import Messages from "../Messages/Messages";
import Input from "../Input/Input";
import { useHistory } from "react-router-dom";

function Chat({ loggedIn }) {

    const [currentUser, setCurrentUser] = useState('');
    const [currentRoom, setCurrentRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState([]);
    const [messages, setMessages] = useState([]);

    let history = useHistory();

    useEffect(() => {
        // проверяем логин, если не залогинен , то перекидываем на начальную страницу сохраняя параметр room в урле
        if(!loggedIn) {
            const { room } = queryString.parse(window.location.search);
            history.push(`/?room=${room}`);
        } else {

            const {name, room} = queryString.parse(window.location.search);

            setCurrentRoom(room);
            setCurrentUser(name);

            socket.emit('join', {name, room}, (error) => {
                // если ошибка то показываем ее в алерте и перекидываем пользователя на начальную страницу
                if (error) {
                    alert(error);
                    const { room } = queryString.parse(window.location.search);
                    history.push(`/?room=${room}`);
                }
            });

            socket.on('message', message => {
                setMessages(messages => [...messages, message]);
            });

            socket.on("roomData", ({users}) => {
                setUsers(users);
            });
        }
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
            setMessage('');
        }
    }

    return (
        <>
            <div className="chat">
                <Info room={currentRoom}/>
                <Messages messages={messages} name={currentUser}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </>
    )
}

export default Chat;