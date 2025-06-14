const ChatMessage = ({ message, isUser, isPending, isError }) => { 
    return (
      <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
        <div
          className={`md:max-w-[80%] rounded-2xl px-4 py-2 ${
            isUser ? "bg-white text-gray-800 rounded-md" : "text-black rounded-md"
          }
            ${isPending ? 'italic text-gray-500' : ''} 
            ${isError ? 'bg-red-100 text-red-700' : ''} 
          `}
        >
          <div dangerouslySetInnerHTML={{ __html: message }} /> 
        </div>
      </div>
    )
  }
  
  export default ChatMessage 