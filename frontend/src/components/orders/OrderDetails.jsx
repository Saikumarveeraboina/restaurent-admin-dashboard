import "./OrderDetails.css";

const OrderDetails = ({ order }) => {
  if (!order) return null;

  return (
    <div className="order-details">
      <h3>Order Details</h3>

      <ul>
        {order.items.map((item, idx) => (
          <li key={idx}>
            {item.menuItem.name} × {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetails;
