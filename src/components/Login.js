import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import {Link} from "react-router-dom";

const Login = ({onLogin, isLogedIn, isLoading}) => {

    const [userName, setUserName] = useState('');
    const [roomId, setRoomId] = useState('');

    //функция отправки формы
    function handleSubmit(e) {
        if (!roomId || !userName) {
            e.preventDefault();
            return alert('Please, fill in form fields and push the button «Submit»');
        }
    }

    //обработчик инпута roomId
    function handlerRoomIDInput(e) {
        setRoomId(e.target.value);
    }

    //обработчик инпута UserName
    function handlerUserNameInput(e) {
        setUserName(e.target.value);
    }

    return (
        <Form className="h-25 d-flex flex-column align-items-center">
            <Form.Label>Please enter room ID</Form.Label>
            <Form.Control type="text"
                          placeholder="Enter room ID"
                          value={roomId}
                          onChange={handlerRoomIDInput}/>
            <Form.Label className="mt-4">Please enter your name</Form.Label>
            <Form.Control type="text"
                          placeholder="Enter name"
                          value={userName}
                          onChange={handlerUserNameInput}/>
            <Form.Text className="text-muted">
                This name will be seen by other chat users.
            </Form.Text>
            <Link onClick={handleSubmit} to={`/chat?name=${userName}&room=${roomId}`}>
                <Button disabled={isLoading} className="mt-4" variant="primary">
                    {isLoading ? 'Loading...' : 'Sign In'}
                </Button>
            </Link>
        </Form>
    );
};

export default Login;