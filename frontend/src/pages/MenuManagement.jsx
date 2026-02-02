import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import MenuCard from "../components/menu/MenuCard";
import MenuFilters from "../components/menu/MenuFilters";
import api from "../api/axios";
import useDebounce from "../hooks/useDebounce";
import Modal from "../components/common/Modal";
import MenuForm from "../components/menu/MenuForm";
import Button from "../components/common/Button";

import "./MenuManagement.css";

const MenuManagement = () => {
  const [menu, setMenu] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const debouncedSearch = useDebounce(search, 300);

  // ✅ FETCH MENU / SEARCH
  useEffect(() => {
    const fetchMenu = async () => {
      const res =
        debouncedSearch.trim().length >= 3
          ? await api.get(`/api/menu/search?q=${debouncedSearch}`)
          : await api.get("/api/menu");

      setMenu(res.data);
    };

    fetchMenu();
  }, [debouncedSearch]);

  // ✅ CREATE
  const createMenuItem = async (data) => {
    try {
      const res = await api.post("/api/menu", data);
      setMenu((prev) => [res.data, ...prev]);
      setShowModal(false);
    } catch {
      alert("Failed to add menu item");
    }
  };

  // ✅ EDIT
  const handleEdit = (item) => {
    setEditingItem(item);
    setShowModal(true);
  };

  const updateMenuItem = async (data) => {
    try {
      const res = await api.put(`/api/menu/${editingItem._id}`, data);
      setMenu((prev) =>
        prev.map((i) => (i._id === editingItem._id ? res.data : i))
      );
      setShowModal(false);
      setEditingItem(null);
    } catch {
      alert("Failed to update item");
    }
  };

  // ✅ DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this item?")) return;

    try {
      await api.delete(`/api/menu/${id}`);
      setMenu((prev) => prev.filter((i) => i._id !== id));
    } catch {
      alert("Failed to delete item");
    }
  };

  // ✅ TOGGLE AVAILABILITY
  const toggleAvailability = async (id) => {
    setMenu((prev) =>
      prev.map((item) =>
        item._id === id
          ? { ...item, isAvailable: !item.isAvailable }
          : item
      )
    );

    try {
      await api.patch(`/api/menu/${id}/availability`);
    } catch {
      alert("Failed to update status");
    }
  };

  return (
    <Layout title="Menu Management">
      <div style={{ marginBottom: "16px" }}>
        <Button onClick={() => setShowModal(true)}>
          + Add Menu Item
        </Button>
      </div>

      <MenuFilters search={search} setSearch={setSearch} />

      <div className="menu-grid">
        {menu.map((item) => (
          <MenuCard
            key={item._id}
            item={item}
            onToggle={toggleAvailability}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {showModal && (
        <Modal
          title={editingItem ? "Edit Menu Item" : "Add Menu Item"}
          onClose={() => {
            setShowModal(false);
            setEditingItem(null);
          }}
        >
          <MenuForm
            onSubmit={editingItem ? updateMenuItem : createMenuItem}
            initialData={editingItem}
          />
        </Modal>
      )}
    </Layout>
  );
};

export default MenuManagement;
