// Path: ./components/Full.tsx

"use client"
import React, { useState, useCallback, useEffect } from 'react';
import Menu from './Menu';
import MessageBar from './MessageBar';
import MessagesList from './MessagesList';

const Full: React.FC = () => {
  const [isGlobalBlur, setIsGlobalBlur] = useState(false);
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/messages');
      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const toggleBlur = useCallback(() => {
    setIsGlobalBlur((prev) => !prev);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <header className="py-4 px-6">
        <div className="flex justify-between">
          <h1 className="text-lg font-medium">MaskTalk</h1>
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
