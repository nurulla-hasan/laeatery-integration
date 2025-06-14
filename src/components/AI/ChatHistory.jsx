
const ChatHistory = ({ messages }) => {
  return (
    <div className="flex flex-col space-y-4">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${
            msg.isUser ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`max-w-[70%] rounded-xl p-3 shadow-md ${
              msg.isUser
                ? 'bg-blue-500 text-white rounded-br-none'
                : 'bg-gray-200 text-gray-800 rounded-bl-none'
            } ${msg.isPending ? 'opacity-70 italic' : ''} ${msg.isError ? 'bg-red-200 text-red-800' : ''}`}
            dangerouslySetInnerHTML={{ __html: msg.text }}
          />
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;