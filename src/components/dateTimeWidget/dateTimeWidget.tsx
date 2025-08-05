import React, { useEffect, useState } from "react";
import "./style.css";

export function DateTimeWidget() {
  const [utcTime, setUtcTime] = useState("");
  const [isDay, setIsDay] = useState(true);
  const [weekday, setWeekday] = useState("");
  const [dateString, setDateString] = useState("");

  useEffect(() => {
    const updateUTCTime = () => {
      const now = new Date();
      const hours = now.getUTCHours();
      const minutes = String(now.getUTCMinutes()).padStart(2, "0");

      setUtcTime(`${String(hours).padStart(2, "0")}:${minutes}`);
      setIsDay(hours >= 6 && hours < 18);

      const optionsWeekday = { weekday: "long" };
      const optionsDate = { day: "2-digit", month: "long", year: "numeric" };
      setWeekday(now.toLocaleDateString("en-GB", optionsWeekday));
      setDateString(now.toLocaleDateString("en-GB", optionsDate));
    };

    updateUTCTime();
    const interval = setInterval(updateUTCTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="date-time-widget">
      <div>{isDay ? "☀️" : "🌙"}</div>
      <div>
        <div>
          <span>{weekday}</span>
          <span> | </span>
          <span>{dateString}</span>
        </div>
        <div>UTC {utcTime}</div>
      </div>
    </div>
  );
}
