import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
    <form className="form">
        <input
            className="form__input"
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyPress={event => event.key === 'Enter' && sendMessage(event)}
        />
        <button className="form__sendButton" onClick={e => sendMessage(e)}>Send</button>
    </form>
)

export default Input;