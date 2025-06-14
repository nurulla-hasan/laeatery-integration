
const SuggestionChip = ({ text, onClick }) => {
  return (
    <button
      onClick={() => onClick(text)}
      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors border border-gray-300"
    >
      {text}
    </button>
  );
};

export default SuggestionChip;