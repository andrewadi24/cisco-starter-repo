import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

const Socket = () => {
    const socketUrl = "ws://localhost:55455"
    const { _, lastMessage, _1 } = useWebSocket(socketUrl);
    return (
        <div>{lastMessage ? <span>{Date.now() - lastMessage.data} miliseconds</span> : null}</div>
    )
}

export default Socket