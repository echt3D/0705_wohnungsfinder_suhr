"use client";
import { useEffect, useState } from "react";

type ApartmentStatusCircleProps = {
  label: string;
  value: number;
};

const ApartmentStatusCircle = ({
  label,
  value,
}: ApartmentStatusCircleProps) => {
  const [delayedValue, setDelayedValue] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedValue(value);
    }, 500);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="text-white flex flex-col items-center justify-center gap-4">
      <p className="font-medium">{label}</p>
      <div className="border-white border-2 rounded-full flex justify-center items-center w-60 h-60 ">
        <p className="text-h2_desktop">
          {delayedValue !== null ? delayedValue : "..."}
        </p>
      </div>
    </div>
  );
};

export default ApartmentStatusCircle;
