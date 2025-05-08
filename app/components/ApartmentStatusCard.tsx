import StatusSelect from "./StatusSelect";

type ApartmentStatusCardProps = {
  name: string;
  status: string;
  floor: string;
  apartmentId: string;
};

const ApartmentStatusCard = ({
  name,
  status,
  floor,
  apartmentId,
}: ApartmentStatusCardProps) => {
  return (
    <div className=" flex flex-col items-center gap-4 p-8 shadow-custom rounded-2xl ">
      <div className="w-full ">
        <p className="text-dashboard_secondary text-body_small_desktop">{`Etage ${floor}`}</p>
        <p className="text-dashboard_primary text-h4_desktop">{`Whg. ${name}`}</p>
      </div>
      <StatusSelect apartmentId={apartmentId} status={status} />
    </div>
  );
};

export default ApartmentStatusCard;
