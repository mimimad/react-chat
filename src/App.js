import './App.css';
import socket from './utils/socket';
import Login from './components/Login';

function App() {
    return (
        <div className="root vh-100 d-flex justify-content-center align-items-center">
            <Login/>
        </div>
    );
}

export default App;
