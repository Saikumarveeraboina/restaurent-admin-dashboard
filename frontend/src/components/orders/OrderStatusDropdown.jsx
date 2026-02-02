import "./OrderStatusDropdown.css";

const OrderStatusDropdown = ({ value, onChange }) => {
  return (
    <select
      className="status-dropdown"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="Pending">Pending</option>
      <option value="Preparing">Preparing</option>
      <option value="Ready">Ready</option>
      <option value="Delivered">Delivered</option>
      <option value="Cancelled">Cancelled</option>
    </select>
  );
};

export default OrderStatusDropdown;
