import './App.css';
import socket from '../../utils/socket';
import Login from '../Login/Login';
import Chat from '../Chat/Chat';
import mainApi from '../../utils/Api';
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {

    const [loggedIn, setloggedIn] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isCurrentUser, setCurrentUser] = useState(null);
    const [isCurrentRoom, setCurrentRoom] = useState(null);
    const [isUsers, setUsers] = useState([]);
    const [isMessages, setMessages] = useState([]);

    //обработчик входа в комнату
    function handleLogin(roomId, userName) {
        setLoading(true);
        mainApi.login(roomId, userName)
            .then((res) => {
                mainApi.getUsersAndMessages(roomId)
                    .then(res => {
                        console.log(res)
                        setUsers(res.users)
                    })
                setloggedIn(true);
                setLoading(false);
                setCurrentUser(userName);
                setCurrentRoom(roomId);
                socket.emit('ROOM:JOIN', {
                    roomId,
                    userName
                });
                console.log(res);
            })
            .catch((err) => {
                console.log(err, 'Что-то пошло не так! Попробуйте ещё раз.');
                alert('Что-то пошло не так! Попробуйте ещё раз.');
            })
    }



    return (
        <div className="root vh-100 d-flex justify-content-center align-items-center">
            <Router>
                <Route path="/" exact component={Login}/>
                <Route path="/chat" exact component={Chat}/>
            </Router>
        </div>
    );
}

export default App;
