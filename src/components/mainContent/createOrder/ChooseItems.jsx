import ToggleBottle from "./ToggleBottle";

function ChooseItems({ items, selectedItems, setSelectedItems }) {
  // Add item only
  function handleAddItem(item) {
    const exists = selectedItems.find((i) => i.id === item.id);
    if (!exists) {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    }
  }

  // Remove item
  function handleRemoveItem(item) {
    const updated = selectedItems.filter((i) => i.id !== item.id);
    setSelectedItems(updated);
  }

  return (
    <>
      <label className="block text-sm font-medium mb-2">Choose Items</label>
      <div className="max-h-[250px] overflow-y-auto">
        {items.map((item) => {
          const isSelected = selectedItems.some((i) => i.id === item.id);
          return (
            <div
              key={item.id}
              className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center mr-3">
                  <img
                    src={item?.image}
                    alt={`${item?.name} image..`}
                    className="w-10 h-10"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{item?.name}</h3>
                  <p className="text-xs text-gray-400">BDT {item?.price}</p>
                </div>
              </div>

              {/* Button Logic */}
              {!isSelected ? (
                <ToggleBottle
                  onClick={() => handleAddItem(item)}
                  isSelected={true}
                />
              ) : (
                <ToggleBottle onClick={() => handleRemoveItem(item)} />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ChooseItems;
