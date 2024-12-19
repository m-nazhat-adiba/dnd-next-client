import React from 'react';

interface ChatProps {
  message: string;
  type: string;
  username: string;
}

export const ChatBubble: React.FC<ChatProps> = ({
  message,
  type,
  username,
}) => {
  if (type === 'inbound') {
    return (
      <div className='flex flex-col gap-1 items-end w-full'>
        <span>{username}</span>
        <div className='flex items-end gap-2'>
          <span className='text-right text-xs text-gray-400'>19:20</span>
          <span className='flex max-w-[80%] w-fit bg-blue-800 text-white rounded-b-md rounded-tr-md p-2 px-4'>
            {message}
          </span>
        </div>
      </div>
    );
  } else if (type === 'outbound') {
    return (
      <div className='flex flex-col gap-1 items-end w-full'>
        <span>{username}</span>
        <div className='flex items-end gap-2'>
          <span className='text-xs text-right text-gray-400'>19:08</span>
          <span className='flex max-w-[80%] w-fit bg-gray-500 text-white rounded-b-md rounded-tr-md py-2 px-4'>
            {message}
          </span>
        </div>
      </div>
    );
  } else {
    console.error('Invalid message type');
    return null;
  }
};
