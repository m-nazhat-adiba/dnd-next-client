import clsx from 'clsx';
import React from 'react';
import { ChatBubble } from '../common/ChatBubble';
import { MessageTextArea } from '../common/MessageTextArea';
import { Icon } from '@iconify/react/dist/iconify.js';

interface DrawerProps {
  isDrawerOn: boolean;
  handleDrawer: () => void;
  drawerRef: React.RefObject<HTMLDivElement>;
}

export const ChatDrawer: React.FC<DrawerProps> = ({
  isDrawerOn,
  handleDrawer,
  drawerRef,
}) => {
  const dummyChat = [
    {
      message: 'Hello',
      type: 'outbound',
      username: 'Nyx',
    },
    {
      message: 'Yes?',
      type: 'inbound',
      username: 'Keith',
    },
  ];
  return (
    <div
      className={clsx(
        'fixed inset-0 bg-gray-800 transition-all',
        { 'bg-opacity-60 visible duration-100': isDrawerOn },
        { 'bg-opacity-0 invisible duration-100': !isDrawerOn }
      )}
    >
      <div
        ref={drawerRef}
        className={clsx(
          'fixed flex-col top-0 right-0 w-[600px] h-screen bg-gray-900 z-50 flex duration-200 py-4 px-10',
          isDrawerOn ? 'translate-x-0' : 'translate-x-[600px]'
        )}
      >
        <div className='flex items-center gap-1'>
          <Icon
            icon='basil:caret-left-solid'
            className='w-8 h-auto hover:cursor-pointer'
            onClick={handleDrawer}
          />
          <span>Chat Room</span>
        </div>
        <div className='w-full h-full flex flex-col justify-end items-end gap-4'>
          {dummyChat.map((item, key) => (
            <ChatBubble
              message={item.message}
              type={item.type}
              username={item.username}
              key={key}
            />
          ))}
        </div>
        <div className='mt-10'>
          <MessageTextArea useImage={false} useEmoji={false} />
        </div>
      </div>
    </div>
  );
};
