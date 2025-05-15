function ActionButton({ btnName, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-800 ${
        btnName === "Delete" ? "hover:bg-red-600" : "hover:bg-green-600 "
      } text-xs px-3 py-1 rounded-full transition-colors duration-300 cursor-pointer`}
    >
      {btnName}
    </button>
  );
}

export default ActionButton;
