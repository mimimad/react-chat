import './App.css';
import Login from '../Login/Login';
import Chat from '../Chat/Chat';
import {useState} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {

    const [loggedIn, setloggedIn] = useState(false);

    return (
        <div className="root vh-100 d-flex justify-content-center align-items-center">
            <Router>
                <Route exact path="/">
                    <Login onloggedIn={setloggedIn}/>
                </Route>
                <Route exact path="/chat">
                    <Chat loggedIn={loggedIn}/>
                </Route>
            </Router>
        </div>
    );
}

export default App;
