function ActionButton({ btnName, hoverColor = "", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-800 hover:bg-${hoverColor}-600 text-xs px-3 py-1 rounded-full transition-colors duration-300 cursor-pointer`}
    >
      {btnName}
    </button>
  );
}

export default ActionButton;
