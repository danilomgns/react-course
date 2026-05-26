import { useState, useEffect } from 'react'
import { ChatInput } from './components/ChatInput';
import { ChatMessage } from './components/ChatMessage';
import ChatMessages from './components/ChatMessages';
import { Chatbot } from 'supersimpledev';
import './App.css'

function App() {
  // const [chatMessages, setChatMessages] = React.useState([{
  //   message: 'hello chatbot',
  //   sender: 'user',
  //   id: 'id1',
  //   time: 1736127288920
  // }, {
  //   message: 'Hello! How can I help you?', 
  //   sender: 'robot',
  //   id: 'id2',
  //   time: 1736127291230
  // }, {
  //   message: 'Flip a coin',
  //   sender: 'user',
  //   id: 'id3',
  //   time: 1736127385356
  // }, {
  //   message: 'Sure! You got tails',
  //   sender: 'robot',
  //   id: 'id4',
  //   time: 1736127385500
  // }]);
  // const [chatMessages, setChatMessages] = array;
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  });

  useEffect(() => {
    Chatbot.addResponses({
      'goodbye': 'Goodbye. Have a great day!',
      'give me a unique id': function() {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      },
      'how can I be saved?': 'You just have to believe in Jesus'
    });

  // [] tells useEffect to only run once. We only want to run
  // this setup code once because we only want to add these
  // extra responses once.
  }, []);
  
  
  return (
    <div className="app-container">
      {chatMessages.length === 0 && <p className="welcome-paragraph">Welcome to the chatbot project! Send a message using the textbox below</p>}
      <ChatMessages 
        chatMessages={chatMessages}
      />
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
