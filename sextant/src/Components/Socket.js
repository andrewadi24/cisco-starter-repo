import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

const Socket = () => {
    const [socketUrl, setSocketUrl] = useState('ws://localhost:55455');
    const [messageHistory, setMessageHistory] = useState([]);
    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
    const now = Date.now()
    useEffect(() => {
        if (lastMessage !== null) {
            setMessageHistory((prev) => prev.concat(lastMessage));
        }
    }, [lastMessage, setMessageHistory]);
    return (
        <div>{lastMessage ? <span>{Date.now() - lastMessage.data} miliseconds</span> : null}</div>
    )
}

export default Socket