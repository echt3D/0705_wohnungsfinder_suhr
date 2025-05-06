import t from "../data/text.json";
import DashboardCircles from "./DashboardCircles";

const DashboardMain = () => {
  const { project_name } = t;
  const { title } = t.dashboard.main;
  return (
    <div className="bg-dashboard_primary w-full h-full  flex flex-col justify-center items-center red text-white">
      <section className=" flex flex-col justify-center items-center">
        <p className="text-dashboard_secondary text-h2_desktop font-light">
          {project_name}
        </p>
        <h1 className=" text-h1_desktop font-light text-center">
          {title.one} <br />
          {title.two}
        </h1>
      </section>
      <DashboardCircles />
    </div>
  );
};

export default DashboardMain;
