import ActionButton from "./ActionButton";

function OrderTableRow({ order, handleDelete, handleDeliver }) {
  return (
    <tr className="border-t border-gray-700">
      <td className="py-3">{order.id}</td>
      <td className="py-3">{order.customerName}</td>
      <td className="py-3">{order.items}</td>
      <td className="py-3">{order.amount}</td>
      <td className="py-3">
        <span
          className={
            order.status === "PENDING" ? "text-red-500" : "text-green-500"
          }
        >
          {order.status}
        </span>
      </td>
      <td className="py-3 space-x-2">
        <ActionButton btnName="Delete" onClick={() => handleDelete(order.id)} />
        {order.status === "PENDING" && (
          <ActionButton
            btnName="DELIVER"
            onClick={() => handleDeliver(order.id)}
          />
        )}
      </td>
    </tr>
  );
}

export default OrderTableRow;
