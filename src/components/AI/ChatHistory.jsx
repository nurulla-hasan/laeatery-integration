import ChatMessage from "./ChatMessage"


const ChatHistory = ({ messages }) => {
  return (
    <div className="w-full max-w-2xl mx-auto mb-6 max-h-[400px] scrl-hide overflow-y-auto">
      {messages.map((msg, index) => (
        <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
      ))}
    </div>
  )
}

export default ChatHistory
