import "./StatusBadge.jsx";

const StatusBadge = ({ status }) => {
  return <span className={`badge ${status.toLowerCase()}`}>{status}</span>;
};

export default StatusBadge;