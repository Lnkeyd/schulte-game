import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

const Timer = () => {
  let [timerVal, setTimerVal] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimerVal((timerVal) => timerVal + 1000);
    }, 1000);

    return () => clearInterval(timer);
  }, [timerVal]);

  return <div>
    <h3>{dayjs(timerVal).format('mm:ss')}</h3>
  </div>;
};

export default Timer;
