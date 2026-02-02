import { useState, useEffect } from "react";
import Button from "../common/Button";
import "./MenuForm.css";

const MenuForm = ({ onSubmit, initialData }) => {
  const [form, setForm] = useState({
    name: "",
    category: "Main Course",
    price: "",
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name,
        category: initialData.category,
        price: initialData.price,
      });
    }
  }, [initialData]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="menu-form" onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} required />
      <select name="category" value={form.category} onChange={handleChange}>
        <option>Appetizer</option>
        <option>Main Course</option>
        <option>Dessert</option>
        <option>Beverage</option>
      </select>
      <input
        name="price"
        type="number"
        value={form.price}
        onChange={handleChange}
        required
      />
      <Button type="submit">
        {initialData ? "Update Item" : "Add Item"}
      </Button>
    </form>
  );
};

export default MenuForm;
