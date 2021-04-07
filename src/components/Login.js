import {Button, Form} from "react-bootstrap";
import {useState} from "react";

const Login = () => {

    const [roomId, setRoomId] = useState('');
    const [userName, setUserName] = useState('');

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
                              onChange={handlerUserNameInput} />
                <Form.Text className="text-muted">
                    This name will be seen by other chat users.
                </Form.Text>
                <Button className="mt-4" variant="primary">Submit</Button>
            </Form>
    );
};

export default Login;