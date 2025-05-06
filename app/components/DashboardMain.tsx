import t from "../data/text.json";
import DashboardCircles from "./DashboardCircles";

const DashboardMain = () => {
  const { project_name } = t;
  const { title } = t.dashboard.main;
  return (
    <section className="bg-dashboard_primary   flex flex-col justify-center items-center h-desktop  text-white">
      <div className=" flex flex-col justify-center items-center mx-auto max-w-desktop ">
        <p className="text-dashboard_secondary text-h2_desktop font-light">
          {project_name}
        </p>
        <h1 className=" text-h1_desktop font-light text-center">
          {title.one} <br />
          {title.two}
        </h1>
      </div>
      <DashboardCircles />
    </section>
  );
};

export default DashboardMain;
