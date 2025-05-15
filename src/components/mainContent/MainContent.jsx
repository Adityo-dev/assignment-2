import { useState } from "react";
// import food icon
import ChickenNuggets from "../../assets/chicken.svg";
import Hamburger from "../../assets/hamburger.svg";
import PizzaSlices from "../../assets/pizza.svg";
import SubmarineSandwich from "../../assets/submarine.svg";
// import components
import CreateOrder from "./createOrder/CreateOrder";
import OrderReports from "./orderReports/OrderReports";
import OrderSummary from "./orderSummary/OrderSummary";

const items = [
  { id: 1, image: Hamburger, name: "Hamburger", price: 220 },
  { id: 2, image: ChickenNuggets, name: "Chicken Nuggets", price: 350 },
  { id: 3, image: SubmarineSandwich, name: "Submarine Sandwich", price: 180 },
  { id: 4, image: PizzaSlices, name: "Pizza slices", price: 499 },
];

function MainContent() {
  const [orderReport, setOrderReport] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [customerName, setCustomerName] = useState("");

  function handlePlaceOrder() {
    if (!customerName || selectedItems.length === 0) return;

    const totalItems = selectedItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    const totalAmount = selectedItems.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );

    const newOrder = {
      id: orderReport.length + 1,
      customerName,
      items: totalItems,
      amount: totalAmount,
      status: "PENDING",
    };

    setOrderReport((prev) => [...prev, newOrder]);
    setSelectedItems([]);
    setCustomerName("");
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <CreateOrder
        items={items}
        customerName={customerName}
        setCustomerName={setCustomerName}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        handlePlaceOrder={handlePlaceOrder}
      />

      <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
        <OrderSummary orderSummary={orderReport} />
        <OrderReports
          orderReports={orderReport}
          setOrderReport={setOrderReport}
        />
      </div>
    </div>
  );
}

export default MainContent;
