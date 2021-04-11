import {Button, Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import queryString from "query-string";

const Login = ({onloggedIn}) => {

    //стейты с именем пользователя и названием комнаты
    const [userName, setUserName] = useState('');
    const [roomId, setRoomId] = useState('');

    // при первом рендере проверяем параметры запроса и помещаем в стейт , если есть
    useEffect(() => {
        const { room } = queryString.parse(window.location.search);
        if(room) setRoomId(room);
    },[])

    //функция отправки формы
    function handleSubmit(e) {
        if(userName === 'admin') {
            e.preventDefault();
            return  alert('This name is taken, please enter another name');
        }
        if (!roomId || !userName) {
            e.preventDefault();
            return alert('Please, fill in form fields and push the button «Submit»');
        }
        onloggedIn(true);
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
            <Link onClick={handleSubmit} to={`/chat?room=${roomId}&name=${userName}`}>
                <Button  className="mt-4" variant="primary">Sign In</Button>
            </Link>
        </Form>
    );
};

export default Login;