import React from "react";
import CountUp, { useCountUp } from "react-countup";
export default function Counter() {
  useCountUp({
    ref: "counter",
    end: 1234567,
    duration: 20,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div className="w-full pb-7 px-16">
      <div className="container m-auto grid grid-cols-4 gap-5 justify-between text-center items-center py-4">
        <div className="num" data-goal={850}>
          <CountUp end={850} enableScrollSpy />
        </div>
        <div className="num" data-goal={230}>
          <CountUp end={230} enableScrollSpy />
        </div>
        <div className="num" data-goal={9450}>
          <CountUp end={9450} enableScrollSpy />
        </div>
        <div className="num" data-goal={780}>
          <CountUp end={780} enableScrollSpy />
        </div>
      </div>
    </div>
  );
}
