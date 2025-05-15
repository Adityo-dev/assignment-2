import { useState } from "react";
import NoOrdersFound from "./NoOrdersFound";
import OrderReportsFilter from "./OrderReportsFilter";
import OrderTableHead from "./OrderTableHead";
import OrderTableRow from "./OrderTableRow";
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

      <div className="bg-[#59565666] rounded-lg p-4 max-h-[450px] overflow-y-auto">
        <table className="min-w-full">
          <OrderTableHead />
          <tbody className="text-sm">
            {filteredReports.length > 0 ? (
              filteredReports.map((order) => (
                <OrderTableRow
                  order={order}
                  key={order.id}
                  handleDeliver={handleDeliver}
                  handleDelete={handleDelete}
                />
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
