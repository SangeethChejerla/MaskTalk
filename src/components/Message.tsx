
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'; 
interface MessageProps {
  id: number;
  name: string;
  message: string;
  timestamp: string; 
  className: string;
}

const Message: React.FC<MessageProps> = ({ id, name, message, timestamp, className }) => {
  const isOdd = id % 2 !== 0;

  return (
    <div className={`flex items-start gap-4 ${isOdd ? 'justify-start' : 'justify-end'} ${className}`}>
      {isOdd && (
        <Avatar className="w-8 h-8 border">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
      )}
      <div
        className={`grid gap-1 rounded-lg p-4 max-w-[75%] ${
          isOdd ? 'bg-muted' : 'bg-primary text-primary-foreground'
        }`}
      >
        <div className="font-medium">{name}</div>
        <div>{message}</div>
        <div className="text-xs text-gray-500">{timestamp}</div> 
      </div>
      {!isOdd && (
        <Avatar className="w-8 h-8 border">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};

export default Message;
