function CustomerNameField({ customerName, handleNameChange }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">Customer Name</label>
      <input
        type="customerName"
        value={customerName}
        onChange={handleNameChange}
        className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#ff602c] transition-all duration-300"
      />
    </div>
  );
}

export default CustomerNameField;
