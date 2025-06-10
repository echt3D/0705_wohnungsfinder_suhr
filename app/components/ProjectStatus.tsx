// "use client";
// import { useEffect, useState } from "react";
// // import { CheckBox } from "@heroui/checkbox";

// interface ProjectStatus {
//   label: string;
//   isCompleted: boolean;
// }

// const ProjectStatus = () => {
//   const [projectStatus, setProjectStatus] = useState<ProjectStatus | null>(
//     null
//   );

//   useEffect(() => {
//     fetch("/api/get-project-status")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("data", data);
//         setProjectStatus(data.data);
//       });
//   }, []);
//   return (
//     <section className="max-w-desktop mx-auto w-full">
//       <div className="w-full relative">
//         {/* {projectStatus && projectStatus.map(status => )} */}
//         <div className="bg-white w-full h-px"></div>
//       </div>
//     </section>
//   );
// };
// export default ProjectStatus;
