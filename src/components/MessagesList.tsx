// Path: ./components/MessagesList.tsx

import React from 'react';
import Message from './Message';

interface MessageProps {
  id: number;
  username: string;
  content: string;
  createdAt: string;
  imageSrc: string;
}

interface MessagesListProps {
  messages: MessageProps[];
  isGlobalBlur: boolean;
}

const MessagesList: React.FC<MessagesListProps> = ({ messages, isGlobalBlur }) => {
  return (
    <div>
      {messages.map((msg) => (
        <div key={msg.id} className="group">
          <Message
            id={msg.id}
            username={msg.username}
            imageSrc={msg.imageSrc}
            message={msg.content}
            timestamp={msg.createdAt}
            className={`message-item transition duration-300 ${
              isGlobalBlur ? 'blur-md group-hover:blur-none' : ''
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default MessagesList;
