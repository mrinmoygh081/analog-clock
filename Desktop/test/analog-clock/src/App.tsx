import { useEffect, useState } from "react";
import "./App.css";
import useTime from "./hooks/useTime";
import Select from "react-select";

function App() {
  const timezoneOptions = [
    { label: "Local", value: "local" },
    { label: "Australia/Sydney", value: "Australia/Sydney" },
  ];
  const [time, setTime] = useState(new Date());
  const [selectedZone, setSelectedZone] = useState("local");

  const { hour, minute, second } = useTime(time, selectedZone);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);

    // return function cleanup() {
    //     console.log("cleaning up");
    //     clearInterval(time);
    //   };
  }, []);

  const getSecondAngles = second * 6;
  const getMinuteAngles = minute * 6;
  const getHourAngles = (hour % 12) * 30 + minute * 0.5;

  return (
    <>
      <div className="container">
        <h2 className="heading">Analog Clock</h2>
        <div className="timezone">
          <Select
            className="basic-single"
            classNamePrefix="select"
            defaultValue={timezoneOptions[0]}
            name="timezone"
            options={timezoneOptions}
            onChange={(selected) => {
              setSelectedZone(selected?.value || "");
            }}
          />
        </div>
        <div className="clock">
          <div
            className="hand hour"
            style={{
              transform: `translate(-50%, -50%) rotate(${getHourAngles - 90}deg)`,
            }}
          ></div>
          <div
            className="hand minute"
            style={{
              transform: `translate(-50%, -50%) rotate(${getMinuteAngles - 90}deg)`,
            }}
          ></div>
          <div
            className="hand second"
            style={{
              transform: `translate(-50%, -50%) rotate(${getSecondAngles - 90}deg)`,
            }}
          ></div>
          <div className="dot"></div>
        </div>
      </div>
    </>
  );
}

export default App;
