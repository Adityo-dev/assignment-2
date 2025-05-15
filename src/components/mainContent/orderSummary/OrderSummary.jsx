function OrderSummary({ orderSummary = [] }) {
  const pendingOrder = orderSummary.filter(
    (order) => order?.status === "PENDING"
  );
  const deliveredOrder = orderSummary.filter(
    (order) => order?.status === "DELIVERED"
  );

  const summaryData = [
    {
      id: 1,
      label: "Total Order",
      count: orderSummary.length,
      color: "yellow",
    },
    {
      id: 2,
      label: "Pending",
      count: pendingOrder.length,
      color: "red",
    },
    {
      id: 3,
      label: "Delivered",
      count: deliveredOrder.length,
      color: "green",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {summaryData.map((item) => (
          <div
            key={item?.id}
            className="bg-[#59565666] rounded-lg p-4 relative overflow-hidden"
          >
            <div className={`text-5xl font-bold text-${item?.color}-500 mb-2`}>
              {item.count}
            </div>
            <div
              className={`bg-${item?.color}-800 bg-opacity-50 text-${item?.color}-200 text-xs font-medium px-3 py-1 rounded-full inline-block`}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderSummary;
