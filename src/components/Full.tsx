"use client"
import React, { useState, useCallback } from 'react';
import Menu from './Menu';
import MessageBar from './MessageBar';
import MessagesList from './MessagesList';

interface MessageProps {
  id: number;
  name: string;
  message: string;
}

// Sample messages array
const messages: MessageProps[] = [
  { id: 1, name: 'John Doe', message: 'Hello, how are you?' },
  { id: 2, name: 'Jane Doe', message: 'I am good, thanks!' },
  { id: 3, name: 'John Doe', message: 'Great, let me know if you need anything!' },
];

const Full: React.FC = () => {
  const [isGlobalBlur, setIsGlobalBlur] = useState(false);

  const toggleBlur = useCallback(() => {
    setIsGlobalBlur(prev => !prev);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <header className="py-4 px-6">
        <div className="flex justify-between">
          <h1 className="text-lg font-medium">Anonymous Chat</h1>
          <Menu toggleBlur={toggleBlur} />
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-4">
        <MessagesList messages={messages} isGlobalBlur={isGlobalBlur} />
      </main>
      <footer className="py-4 px-6">
        <MessageBar />
      </footer>
    </div>
  );
};

export default Full;
