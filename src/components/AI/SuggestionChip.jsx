"use client"

const SuggestionChip = ({ text, onClick }) => {
  return (
    <button
      onClick={() => onClick(text)}
      className="bg-white text-gray-800 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow text-sm"
    >
      {text}
    </button>
  )
}

export default SuggestionChip
