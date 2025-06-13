import ChatMessage from "./ChatMessage"


const ChatHistory = ({ messages }) => {
  return (
    <div className="w-full max-w-3xl mx-auto min-h-[500px] scrl-hide overflow-y-auto">
      {messages.map((msg, index) => (
        <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
      ))}
    </div>
  )
}

export default ChatHistory
