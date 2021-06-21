import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import { ChatFeed } from 'chat';
import 'chat/style/chat.css';

const Chat = () => {
    return (
        <>
            <ChatEngine
                height="100vh"
                projectID="452f03af-2d74-4651-9146-040772d96225"
                userName="seulgi"
                userSecret="1234"
                renderChatFeed={(chatAppProps) => (
                    <ChatFeed {...chatAppProps} />
                )}
            />
        </>
    );
};

export default Chat;
