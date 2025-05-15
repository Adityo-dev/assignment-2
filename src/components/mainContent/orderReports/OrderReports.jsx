import { useState } from "react";
import ActionButton from "./ActionButton";
import NoOrdersFound from "./NoOrdersFound";
import OrderReportsFilter from "./OrderReportsFilter";
function OrderReports({ orderReports, setOrderReport }) {
  const [statusFilter, setStatusFilter] = useState("All");
  const handleDeliver = (id) => {
    setOrderReport((prevReports) =>
      prevReports.map((order) =>
        order.id === id ? { ...order, status: "DELIVERED" } : order
      )
    );
  };

  const handleDelete = (id) => {
    setOrderReport((prevReports) =>
      prevReports.filter((order) => order.id !== id)
    );
  };

  const filteredReports =
    statusFilter === "All"
      ? orderReports
      : orderReports.filter((order) => order.status === statusFilter);

  return (
    <div>
      <OrderReportsFilter
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <div className="bg-[#59565666] rounded-lg p-4">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-sm">
              <th className="pb-3 font-medium">ID</th>
              <th className="pb-3 font-medium">Customer Name</th>
              <th className="pb-3 font-medium">Items</th>
              <th className="pb-3 font-medium">Amount</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium">Action</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {filteredReports.length > 0 ? (
              filteredReports.map((order) => (
                <tr className="border-t border-gray-700" key={order.id}>
                  <td className="py-3">{order.id}</td>
                  <td className="py-3">{order.customerName}</td>
                  <td className="py-3">{order.items}</td>
                  <td className="py-3">{order.amount}</td>
                  <td className="py-3">
                    <span
                      className={
                        order.status === "PENDING"
                          ? "text-red-500"
                          : "text-green-500"
                      }
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 space-x-2">
                    <ActionButton
                      btnName="Delete"
                      hoverColor="red"
                      onClick={() => handleDelete(order.id)}
                    />
                    {order.status === "PENDING" && (
                      <ActionButton
                        btnName="DELIVER"
                        hoverColor="green"
                        onClick={() => handleDeliver(order.id)}
                        marginRight={false}
                      />
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">
                  <NoOrdersFound status={statusFilter} />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderReports;
