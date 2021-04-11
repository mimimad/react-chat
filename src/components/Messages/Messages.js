import './Messages.css';
import Message from '../Message/Message';


const Messages = ({ messages, name }) => (
    <div className="scrollbar scrollbar-primary messages">
        {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
    </div>
);

export default Messages;