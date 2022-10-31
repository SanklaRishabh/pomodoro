import { useMemo } from "react";
import { TimerType } from "../typedefs";

export const TimerDisplay: React.FC<{ time: string; isTicking?: boolean }> = ({
  time,
  isTicking = false,
}) => {
  const rectifiedTime = useMemo<TimerType>(() => {
    // make the length of the time string 6 by padding with 0s
    let x = time.padStart(6, "0");
    let ss = parseInt(x.slice(4, 6));
    let mm = parseInt(x.slice(2, 4));
    let hh = parseInt(x.slice(0, 2));

    return {
      hour: hh,
      minute: mm,
      second: ss,
    };
  }, [time]);

  return (
    <div className="flex gap-2 items-center ">
      <TimeBlock num={rectifiedTime.hour} />
      <span
        className={`text-4xl text-gray-800 ${
          isTicking ? "animate-pulse duration-1000" : ""
        }`}
      >
        :
      </span>
      <TimeBlock num={rectifiedTime.minute} />
      <span
        className={`text-4xl text-gray-800 ${
          isTicking ? "animate-pulse duration-1000" : ""
        }`}
      >
        :
      </span>
      <TimeBlock num={rectifiedTime.second} />
    </div>
  );
};

const TimeBlock: React.FC<{ num: number }> = ({ num }) => {
  return (
    <div className="w-20 h-20 flex justify-center items-center bg-gray-200 shadow-inner ">
      {num < 10 ? `0${num}` : num}
    </div>
  );
};
