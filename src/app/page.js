"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Mic, Plus, Send } from "lucide-react";
import ChatHistory from "@/components/AI/ChatHistory";
import SuggestionChip from "@/components/AI/SuggestionChip";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { getAiResponse } from "@/lib/apis/ai/ai";
import { ErrorToast } from "@/utils/ValidationToast";
import Navbar from "@/components/navbar/Navbar";


const bgImage = {
  backgroundImage: 'url(/image/heroBG.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '90vh',
  opacity: 0.7
};

const formatMessage = (content) => {
  if (!content) return '';

  let formatted = content
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/📅\s*\*\*(.*?)\*\*/g, '<h2>📅 $1</h2>')
    .replace(/🍽️\s*\*\*(.*?)\*\*/g, '<h3>🍽️ $1</h3>')
    .replace(/^•\s*(.*?)$/gm, '<li>$1</li>')
    .replace(/⏰\s*(.*?Timing:.*?)/g, '<span class="time-label">⏰ $1</span>')
    .replace(/🔥\s*(.*?Highlights:.*?)/g, '<span class="highlight-label">🔥 $1</span>')
    .replace(/\n/g, '<br>');
  formatted = formatted.replace(/(<li>.*?<\/li>(?:\s*<br>\s*<li>.*?<\/li>)*)/gs, '<ul>$1</ul>');
  formatted = formatted.replace(/<br>\s*(<ul>)/g, '$1');
  formatted = formatted.replace(/(<\/ul>)\s*<br>/g, '$1');

  return formatted;
}


const Home = () => {
  const router = useRouter()
  const [message, setMessage] = useState("")
  const [chatHistory, setChatHistory] = useState([])
  const chatHistoryRef = useRef(null);
  const [isLoadingLocalStorage, setIsLoadingLocalStorage] = useState(true);

  const [clickedOnce, setClickedOnce] = useState(false);
  const [isChatted, setIsChatted] = useState(false);


  const suggestions = [
    "Find me a romantic restaurant",
    "Best Italian food in LA",
    "Rooftop dining options",
    "Restaurants open late night",
  ]

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedChatHistory = localStorage.getItem('chatHistory');
      if (storedChatHistory) {
        try {
          const parsedHistory = JSON.parse(storedChatHistory);
          setChatHistory(parsedHistory);
          if (parsedHistory.length > 0) {
            setClickedOnce(true);
          }
        } catch (e) {
          console.error("Failed to parse chat history from localStorage", e);
          localStorage.removeItem('chatHistory');
        }
      }

      // Load clickedOnce state
      const storedClickedOnce = localStorage.getItem('clickedOnce');
      if (storedClickedOnce === 'true') {
        setClickedOnce(true);
      }

      // Load isChatted state
      const storedIsChatted = localStorage.getItem('isChatted');
      if (storedIsChatted === 'true') {
        setIsChatted(true);
      }
    }
    setIsLoadingLocalStorage(false); // Mark loading as complete
  }, []); 
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('isChatted', isChatted);
    }
  }, [isChatted]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('clickedOnce', clickedOnce);
    }
  }, [clickedOnce]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
    }
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [chatHistory]);


  const aiMutation = useMutation({
    mutationFn: getAiResponse,
    onMutate: async (newMessagePayload) => {
      const userMessage = newMessagePayload.message;
      setChatHistory((prev) => [...prev, { text: userMessage, isUser: true }]);
      setChatHistory((prev) => [...prev, { text: "Typing...", isUser: false, isPending: true }]);
      setMessage("");
      setClickedOnce(true);
    },
    onSuccess: (data) => {
      setChatHistory((prev) => {
        const newHistory = prev.filter(msg => !msg.isPending);
        const updatedHistory = [...newHistory, { text: formatMessage(data?.response), isUser: false }];
        setIsChatted(true);
        return updatedHistory;
      });
    },
    onError: (error) => {
      setChatHistory((prev) => prev.filter(msg => !msg.isPending));
      console.error("AI API Error:", error);
      const errorMessage = error.response?.data?.message || "Failed to get AI response. Please try again.";
      ErrorToast(errorMessage);
      setChatHistory((prev) => [...prev, { text: "Error: Could not get AI response. Please try again.", isUser: false, isError: true }]);
    },
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    aiMutation.mutate({ message: message });
  };

  const handleSuggestionClick = (text) => {
    aiMutation.mutate({ message: text });
  };

  const handleExplore = () => {
    if (chatHistory.length === 0 && !clickedOnce) {
        setClickedOnce(true);
        setIsChatted(true); 
    } else {
        setIsChatted(true);
        router.push('/ai-picks');
    }
  }

  if (isLoadingLocalStorage) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading your chat...</p>
      </div>
    );
  }

  const showInitialSection = !(chatHistory.length > 0 || clickedOnce);
  const showChatSection = (chatHistory.length > 0 || clickedOnce);


  return (
    <>
    <Navbar/>
      <div className='flex flex-col'>
        {showInitialSection && (
          <div className="flex flex-col items-center justify-center flex-grow py-10">
            <div className="relative mb-4">
              <Image src="/image/logo2.png" alt="LA Eatery Logo" width={1920} height={1080} className="object-contain w-[500px]" />
            </div>

            <div className="my-5">
              <h1 className="text-lg font-light font-geologica tracking-[0.3em] text-gray-800 text-center mb-4 uppercase space-x-5">
                <span>L A ’ S</span> <span>R E S T A U R A N T</span> <span>C O N C I E R G E</span>
              </h1>
              <p className="text-md text-red-500 font-geologica tracking-[0.25em] text-center uppercase space-x-5">
                – <span>T A I L O R E D</span> <span>B Y</span> <span>A I</span> –
              </p>
            </div>

            <div className="mt-4 text-center">
              <button onClick={handleExplore} className="bg-[#5C5C5C] cursor-pointer hover:bg-gray-800 text-white py-3 px-8 rounded-full transition-colors">
                Let’s Explore
              </button>
            </div>
          </div>
        )}

        {showChatSection && (
          <div className="flex flex-col flex-grow items-center w-full max-w-5xl mx-auto px-4 pb-4">
            <div ref={chatHistoryRef} className="flex-grow w-full overflow-y-auto scrl-hide p-4 mb-4 max-h-[420px] md:max-h-[650px] max-w-[768px]">
              <ChatHistory messages={chatHistory} />
            </div>

            {chatHistory.length <= 2 && (
              <div className="flex fixed bottom-28 flex-wrap justify-center gap-2 mb-6 w-full max-w-2xl">
                {suggestions.map((suggestion, index) => (
                  <SuggestionChip key={index} text={suggestion} onClick={handleSuggestionClick} />
                ))}
              </div>
            )}

            <form onSubmit={handleSubmit} className="w-full max-w-2xl fixed bottom-4">
              <div className="flex items-center p-2 pl-4 bg-white rounded-full shadow-md border border-gray-300">
                <Plus className="w-5 h-5 mr-2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Ask me anything about LA restaurants..."
                  className="flex-grow px-2 py-2 text-gray-800 focus:outline-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={aiMutation.isPending}
                />
                {message.trim() ? (
                  <button
                    type="submit"
                    className="flex items-center justify-center p-2 text-white bg-gray-800 rounded-full"
                    disabled={aiMutation.isPending}
                  >
                    {aiMutation.isPending ? (
                      <span className="loading-spinner"></span>
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                  </button>
                ) : (
                  <button
                    type="button"
                    className="flex items-center justify-center p-2 text-white bg-gray-800 rounded-full"
                    disabled={aiMutation.isPending}
                  >
                    <Mic className="w-5 h-5" />
                  </button>
                )}
              </div>
            </form>

            {chatHistory.length > 0 && (
              <div className="mt-4 text-center fixed bottom-20">
                <button onClick={handleExplore} className="bg-[#5C5C5C] cursor-pointer hover:bg-gray-800 text-white py-2 px-6 rounded-full transition-colors">
                  {isChatted ? "Go to AI Picks" : "Let’s Explore"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default Home