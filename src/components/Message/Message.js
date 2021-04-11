import './Message.css';

const Message = ({message: {text, user, time}, name}) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
            ? (
                <div className="message message_justifyEnd">
                    <div className="message__sentText">
                        <p className="message__text">{trimmedName}</p>
                        <p className="message__time ">{time}</p>
                    </div>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">{text}</p>
                    </div>
                </div>
            )
            : (
                <div className="message message_justifyStart">
                    <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">{text}</p>
                    </div>
                    <div className="message__sentText">
                        <p className="message__text">{user}</p>
                        <p className="message__time">{time}</p>
                    </div>
                </div>
            )
    );
}

export default Message;