import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import Image from './assets/hercule.png';
import User from './assets/user.png';
import "./Loading.css";
import axios from 'axios';


const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

function App() {

  const url="https://8539-34-91-83-169.ngrok-free.app";
  
  const location = useLocation();
  const [inputState, setInputState] = useState('');
  const [color, setColor] = useState('bg-claudeBackground');
  /*const [textColor, setTextColor] = useState('text-white');*/
  const [bubbleColor, setBubbleColor] = useState('bg-claudeBubble');
  const [chats, setChats] = useState(0);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [FAQ, setFAQ] = useState([{'Question': 'What is Antaeus?', 'Answer': 'Antaeus is a chatbot that helps you with your queries.'}, {'Question': 'How can I use Antaeus?', 'Answer': 'You can use Antaeus by typing your queries in the chatbox.'},{
    'Question': 'What is the purpose of Antaeus?', 'Answer': 'The purpose of Antaeus is to help you with your queries.'}]);
  

  const messagesEndRef = useRef(null);

  const handleFAQ = (e) => {
    setMessages([...messages, e.target.innerText]);
  };
  const handleChange = (e) => {
    setInputState(e.target.value);
    console.log('Input state changed:', inputState);
  };


  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      const userMessage = e.target.value;
      console.log("paht ",location.pathname,"search",location.search); ;
      setMessages(prev => [...prev, {"role": "user", "message": userMessage}]);
      fetchMessage(userMessage);
      e.target.value = '';
      setInputState('');
    }
  };
  const [error, setError] = useState(null); // Handle errors


  const params = useParams(); 
  const navigate = useNavigate(); 
  

  const currentPath = location.pathname;
  const queryParams = new URLSearchParams(location.search);
  const specificParam = queryParams.get('paramName');

  useEffect(() => {
    console.log('Current path:', currentPath);
    console.log('Query params:', Object.fromEntries(queryParams));
    console.log('Route params:', params);
  }, [location]);
  


  const fetchMessage = async (userInput) => {
    if (!userInput) return;
    
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post(url+"/chat", {
        prompt: userInput
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.data) {
        setMessages(prev => [...prev, {
          role: "bot",
          message: response.data.response
        }]);
      }
    } catch (err) {
      console.error('Chat API Error:', err);
      setError(err.response?.data?.message || "Failed to get response");
      setMessages(prev => [...prev, {
        role: "bot",
        message: "Sorry, I encountered an error processing your request."
      }]);
    } finally {
      setLoading(false);
    }
  };
  

 


  


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    console.log('Input state changed:', inputState);
  }, [inputState]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      
      <div className={`flex flex-col justify-between items-center min-h-screen mx-auto `}>
        <header className={`flex sticky top-0 justify-between items-center px-4 pb-1 bg-claudeBackground w-full  text-gray-800 z-10 shadow-md shadow-gray `}>
          <div className="flex items-center">
            <button onClick={toggleSidebar} className={`p-2  text-4xl`}>
              {isSidebarOpen ? '✕' : '☰'}
            </button>
            <h1 className={`text-2xl font-bold  ml-4`}>Antaeus</h1>
          </div>
          <div>
            <button className=' hover:bg-stone-500  font-semibold hover:text-gray-100 py-2 px-4 border-2 border-gray-500 hover:border-transparent rounded'>New Chat</button>
          </div>
        </header>
        <div className='min-h-full w-full md:w-4/5 sm:w-4/5 lg:w-3/5'>
          {messages.length > 0 && (
            <div className='p-4 self-end align-text-bottom w-full overflow-y-auto'>
            {messages.map((message, index) => (
              <span key={index}>
                {message.role === "user" ? (
                  <div className='flex justify-end items-center mb-8'>
                    <div className={`${bubbleColor} p-3 rounded-lg shadow-lg text-gray-800 text-lg max-w-xl sm:max-w-fit text-wrap break-words`}>
                      <p>{message.message}</p>
                    </div>
                    <span><img src={User} className='rounded-md' width={50} height={50} /></span>
                  </div>
                ) : message.role === "bot" ? (
                  <div className='flex justify-start items-center mb-8'>
                    <span><img src={Image} width={50} height={50} /></span>
                    <div className={`${bubbleColor} max-w-xl shadow-md text-gray-800 text-wrap break-words p-3 rounded-lg text-lg`}>
                      <p>{message.message}</p>
                    </div>
                  </div>
                ) : null}
              </span>
            ))}
            <div ref={messagesEndRef} />
          </div>
          )}
        </div>
        {loading && <Loading />}
        <div className={`md:mb-72 ${messages.length === 0 ? '' : 'hidden'} flex-col justify-center items-center `}>
          <img src={Image} width={180} height={180} className='self-center mx-auto' />
          <div className='flex sm:flex-col md:flex-row gap-2'>
            {FAQ.map((faq, index) => (
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:transform hover:-translate-y-2 ease-in-out duration-150  " key={index} onClick={handleFAQ}>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{FAQ[index]['Question']}</div>
                  <p className="text-gray-700 text-base">
                    {FAQ[index]['Answer']}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`flex justify-center items-center fixed bottom-0 right-0  left-0  transform transition-transform duration-800 ease-in-out ${messages.length === 0 ? '-translate-y-56' : 'translate-y-0'} ${color} sm:bottom-0'`}>
          <input

            type="text"
            placeholder="Enter your name"
            className={`p-2 border-2 focus mt05 color-gray-300 w-full md:w-3/5 bg-claudeBackground border-orange-30  rounded-3xl mb-0 focus:outline-none text-blue-950 border-stone-400 focus:border-stone-600 hover:shadow-xl  `}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
      <div className={`fixed top-0 left-0 h-full w-64 bg-claudeBackground border-r border-gray-200 shadow-md text-gray-800  transform transition-transform duration-300 ease-in-out overflow-y-auto ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 pt-28">
          <h2 className="text-xl font-semibold mb-6 ">Navigation</h2>
          <nav >
            <ul className="space-y-4 mb-6 flex flex-col justify-center">
              <li><a href="#section1" className="block py-2 hover:bg-gray-100"> <span className="material-icons">account_circle</span> Account</a></li>
              <li><a href="#section2" className="block py-2 hover:bg-gray-100"> <span className='material-icons'>person</span> Profile</a></li>
              <li><a href="#section3" className="block py-2 hover:bg-gray-100"> <span className='material-icons'>settings</span>Settings</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default App;