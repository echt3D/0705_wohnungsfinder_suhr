const StatusBatch = ({ status }: { status: string }) => {
  return (
    <div
      className={`px-2 py-1 bg-status_badge rounded-md  text-sm text-white ${
        status === "frei" ? "bg-opacity-100" : "bg-opacity-50"
      }`}
    >
      <span>{status}</span>
    </div>
  );
};

export default StatusBatch;
