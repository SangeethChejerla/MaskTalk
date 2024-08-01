// MessagesList.tsx
import React from 'react';
import Message from './Message'; // Adjust import path if necessary

interface MessageProps {
  id: number;
  name: string;
  message: string;
}

interface MessagesListProps {
  messages: MessageProps[];
  isGlobalBlur: boolean;
}

const MessagesList: React.FC<MessagesListProps> = ({ messages, isGlobalBlur }) => {
  return (
    <div className="">
      {messages.map((msg) => {
        const timestamp = new Date().toLocaleTimeString(); // Generate timestamp
        return (
          <div key={msg.id} className="group">
            <Message
              id={msg.id}
              name={msg.name}
              message={msg.message}
              timestamp={timestamp} // Pass timestamp prop
              className={`message-item transition duration-300 ${
                isGlobalBlur ? 'blur-md group-hover:blur-none' : ''
              }`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MessagesList;
