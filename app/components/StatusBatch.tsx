const StatusBatch = ({ status }: { status: string }) => {
  return (
    <div
      className={`px-2 py-1 bg-status_badge rounded-md  text-sm text-white ${
        status === "frei" ? "opacity-100" : "opacity-80"
      }`}
    >
      <span>{status}</span>
    </div>
  );
};

export default StatusBatch;
