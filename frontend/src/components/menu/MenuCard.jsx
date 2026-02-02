import Button from "../common/Button";
import "./MenuCard.css";

const MenuCard = ({ item, onToggle, onEdit, onDelete }) => {
  return (
    <div className="menu-card">
      <div className="menu-info">
        <h3>{item.name}</h3>
        <p className="category">{item.category}</p>
        <p className="price">₹{item.price}</p>
      </div>

      <div className="menu-actions">
        <Button onClick={() => onToggle(item._id)}>
          {item.isAvailable ? "Available" : "Unavailable"}
        </Button>

        <div className="edit-delete">
          <Button variant="secondary" onClick={() => onEdit(item)}>
            Edit
          </Button>
          <Button variant="danger" onClick={() => onDelete(item._id)}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
