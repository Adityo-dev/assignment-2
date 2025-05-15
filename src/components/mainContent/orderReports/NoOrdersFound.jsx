function NoOrdersFound({ status }) {
  // Define messages
  const messages = {
    All: "No orders available",
    PENDING: "No pending orders found",
    DELIVERED: "No delivered orders found",
  };

  const message = messages[status] || "No orders found";

  return (
    <div className="flex flex-col items-center justify-center border-t border-gray-700 py-12">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p className="mt-2 text-gray-400">{message}</p>
    </div>
  );
}

export default NoOrdersFound;
