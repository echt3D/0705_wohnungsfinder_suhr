"use client";
import {
  //   useContext,
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
} from "react";

import { Stage, Layer, Group, Line, Image as KonvaImage } from "react-konva";
import svgData from "../data/svgData.json";

// import Image from "next/image";

interface Visu {
  [key: string]: HTMLImageElement;
}

const preloadedVisus: Visu = {};

const preloadImage = (src: string) => {
  if (!preloadedVisus[src]) {
    const img = new window.Image();
    img.src = src;
    preloadedVisus[src] = img;
  }
};

const Wohnungsfinder = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    const updateContainerSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current?.offsetWidth || 0,
          height: containerRef.current?.offsetHeight || 0,
        });
      }
    };
    updateContainerSize();
    window.addEventListener("resize", updateContainerSize);
    return () => {
      window.removeEventListener("resize", updateContainerSize);
    };
  }, []);

  useEffect(() => {
    for (let i = 1001; i <= 1012; i++) {
      preloadImage(`/images/${i}.jpg`);
    }
  }, []);
  const currentImage = preloadedVisus[`/images/1002.jpg`];
  const stageRef = useRef(null);
  const bounds = { width: 2636, height: 1974 };
  const heightScale = containerSize.height / bounds.height;
  const widthScale = containerSize.width / bounds.width;
  const scaleRatio = Math.max(heightScale, widthScale);

  const svgPathsArr = Object.entries(svgData["1002"]);
  const strToNum = (points: string[]) => points.map((point) => Number(point));

  if (containerSize.width === 0 || containerSize.height === 0) {
    return <div ref={containerRef} className="w-full h-desktop" />;
  }
  return (
    <div ref={containerRef} className="h-full w-desktop blue">
      <Stage
        ref={stageRef}
        width={containerSize.width}
        height={containerSize.height}
        scale={{ x: scaleRatio, y: scaleRatio }}
        offsetX={bounds.width / 2}
        offsetY={bounds.height / 2}
        x={containerSize.width / 2}
        y={
          window.innerWidth < 1280
            ? containerSize.height / 3
            : containerSize.height / 2
        }
      >
        <Layer>
          {currentImage && (
            <KonvaImage
              image={currentImage}
              width={bounds.width}
              height={bounds.height}
              offsetX={bounds.width / 2}
              offsetY={bounds.height / 2}
              x={bounds.width / 2}
              y={bounds.height / 2}
            />
          )}
          <Group className="relative"></Group>
          {svgPathsArr.map((point, i) => (
            <Group
              key={i}
              // onMouseEnter={() => handleHover(point[0])}
              // onMouseLeave={() => handleHover("")}
              // onClick={() => handleClick(point[0])}
            >
              {/* {showSVG ? ( */}
              <Line
                points={strToNum(point[1].split(" "))}
                strokeWidth={4}
                stroke="white"
                closed={true}
                //   fill={getColorByStatus(
                //     findApartmentByTitle(point[0]).stateSimplyfied
                //   )}
                //   opacity={
                //     isHovered(point[0]) || isClicked(point[0]) ? 0.8 : 0.4
                //   }
              />
              {/* ) : (
                  <Line
                    points={strToNum(point[1].split(" "))}
                    strokeWidth={4}
                    closed="true"
                    stroke={
                      isHovered(point[0]) || isClicked(point[0])
                        ? "white"
                        : "transparent"
                    }
                    fill={
                      isHovered(point[0]) || isClicked(point[0])
                        ? getColorByStatus(
                            findApartmentByTitle(point[0]).stateSimplyfied
                          )
                        : "transparent"
                    }
                    opacity={0.8}
                  />
                )} */}
            </Group>
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default Wohnungsfinder;
