import ChooseItems from "./ChooseItems";
import CustomerNameField from "./CustomerNameField";
function CreateOrder({
  items,
  customerName,
  setCustomerName,
  selectedItems,
  setSelectedItems,
  handlePlaceOrder,
}) {
  // Handle Customer Name Function
  function handleNameChange(e) {
    setCustomerName(e.target.value);
  }
  const totalPrice = selectedItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="bg-[#59565666] rounded-lg p-6 h-[calc(100vh_-_130px)] space-y-4">
      <div>
        <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
        <p className="text-gray-400 text-sm mb-4">
          Accurately fulfill customer orders based on a precise understanding of
          their requirements.
        </p>
      </div>
      <CustomerNameField
        customerName={customerName}
        handleNameChange={handleNameChange}
      />

      <ChooseItems
        items={items}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
      <button
        onClick={handlePlaceOrder}
        className="w-full bg-[#ff602c] hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer"
      >
        Place Order (BDT {totalPrice})
      </button>
    </div>
  );
}

export default CreateOrder;
