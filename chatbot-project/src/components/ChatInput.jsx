import { useState, useEffect } from 'react'
import { Chatbot } from 'supersimpledev'
import LoadSpinnerImage from '../assets/loading-spinner.gif'
import dayjs from 'dayjs';
import './ChatInput.css'

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    
    if (isLoading || !inputText) {
      return;
    }

    const time = dayjs().valueOf();
    
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID(),
        time: dayjs(time).format('h:mma')
      },
      {
        message: <img className="loading-image" src={LoadSpinnerImage} />,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ];
    
    setChatMessages(newChatMessages);
    setInputText('');
    setIsLoading(true);

    const response = await Chatbot.getResponseAsync(inputText);

    setChatMessages([
      ...newChatMessages.slice(0, newChatMessages.length - 1),
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID(),
        time: dayjs(time).format('h:mma')
      }
    ]);

    setIsLoading(false);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      sendMessage();
    } else if (event.key === 'Escape') {
      setInputText('');
    }
  }

  function clearMessages() {
    setChatMessages([]);
  }

  return (
    <div className="chat-input-container">  
      <input 
        className="chat-input"
        placeholder="Send a message to Chatbot" 
        size="30"
        onChange={saveInputText}
        onKeyDown={handleKeyDown}
        value={inputText}
      />
      <button
        className="send-button"
        onClick={sendMessage}
      >Send
      </button>
      <button
        className="clear-button"
        onClick={clearMessages}
      >Clear
      </button>
    </div>
  );
}