import "./MenuFilters.css";

const MenuFilters = ({ search, setSearch }) => {
  return (
    <div className="menu-filters">
      <input
        type="text"
        placeholder="Search menu..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default MenuFilters;
