import { ResponsiveLine } from "@nivo/line";
import t from "../data/text.json";
import Link from "next/link";

const RealTimeBlock = () => {
  const { title, button } = t.dashboard.main.real_time;
  const data = [
    {
      id: "Besuche",
      data: [
        { x: "0", y: "0" },
        { x: "1", y: "0" },
        { x: "2", y: "0" },
        { x: "3", y: "0" },
        { x: "4", y: "0" },
        { x: "5", y: "0" },
        { x: "6", y: "3" },
        { x: "7", y: "12" },
        { x: "8", y: "22" },
        { x: "9", y: "25" },
        { x: "10", y: "16" },
        { x: "11", y: "23" },
        { x: "12", y: "40" },
        { x: "13", y: "33" },
        { x: "14", y: "20" },
        { x: "15", y: "14" },
        { x: "16", y: "10" },
        { x: "17", y: "23" },
        { x: "18", y: "10" },
        { x: "19", y: "22" },
        { x: "20", y: "14" },
        { x: "21", y: "15" },
        { x: "22", y: "8" },
        { x: "23", y: "2" },
      ],
    },
    {
      id: "Besucher",
      data: [
        { x: "0", y: "0" },
        { x: "1", y: "0" },
        { x: "2", y: "0" },
        { x: "3", y: "0" },
        { x: "4", y: "0" },
        { x: "5", y: "0" },
        { x: "6", y: "1" },
        { x: "7", y: "1" },
        { x: "8", y: "2" },
        { x: "9", y: "3" },
        { x: "10", y: "16" },
        { x: "11", y: "3" },
        { x: "12", y: "4" },
        { x: "13", y: "33" },
        { x: "14", y: "20" },
        { x: "15", y: "1" },
        { x: "16", y: "10" },
        { x: "17", y: "23" },
        { x: "18", y: "10" },
        { x: "19", y: "2" },
        { x: "20", y: "14" },
        { x: "21", y: "1" },
        { x: "22", y: "8" },
        { x: "23", y: "2" },
      ],
    },
  ];

  return (
    <section className="bg-white  w-full py-20">
      <div className="max-w-desktop mx-auto  flex flex-col items-center gap-8  ">
        <h2 className="text-h2_desktop">{title}</h2>
        <div className="h-[40vh] 2xl:h-[40vh] w-full">
          <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            curve="monotoneX"
            enableArea={true}
            enableGridX={true}
            enableGridY={false}
            theme={{
              grid: {
                line: {
                  stroke: "#D14600",
                  strokeWidth: 1,
                  strokeDasharray: "2",
                },
              },
              axis: {
                legend: {
                  text: {
                    fontSize: 12,
                    fill: "#001D3D",
                    fontFamily: '"neue-kabel", sans-serif',
                  },
                },
              },
            }}
            colors={["#001D3D", "#D14600"]}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false,
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Uhrzeit",
              legendOffset: 36,
              legendPosition: "middle",
              truncateTickAt: 0,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "",
              legendOffset: -40,
              legendPosition: "middle",
              truncateTickAt: 0,
            }}
            enableTouchCrosshair={true}
            useMesh={true}
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(209, 70, 0)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(209, 70, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
            role="application"
          />
        </div>
        <Link
          href={button.link}
          className="bg-dashboard_primary text-white text-center py-2 px-12 rounded-full hover:opacity-70 duration-200 cursor-pointer z-10 relative"
        >
          {button.label}
        </Link>
      </div>
    </section>
  );
};

export default RealTimeBlock;
