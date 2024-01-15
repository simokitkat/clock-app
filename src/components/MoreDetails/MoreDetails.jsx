import { useEffect, useState } from "react";
import { useGlobalContext } from "../GlobalContext/GlobalContext";
import "./more-details.scss";

export default function MoreDetails() {
  const { state } = useGlobalContext();
  const [detailsClass, setDetailsClass] = useState("more-details");

  useEffect(() => {
    if (state.isMore && !detailsClass.includes("show")) {
      setDetailsClass((prev) => prev + " show");
    } else {
      setDetailsClass((prev) => {
        const arr = prev.split(" ").filter((e) => e !== "show");
        return arr.join(" ");
      });
    }

    if (state.timeStatus === "day" && !detailsClass.includes("day")) {
      setDetailsClass((prev) => prev + " day");
    } else {
      setDetailsClass((prev) => {
        const arr = prev.split(" ").filter((e) => e !== "day");
        return arr.join(" ");
      });
    }
  }, [state.isMore]);

  return (
    <div className={detailsClass}>
      <div
        className={
          state.timeStatus === "day"
            ? "details-container day"
            : "details-container"
        }
      >
        {/* left */}
        <div className="left">
          <div>
            <h6>CURRENT TIMEZONE</h6>
            <h2>{state.worldTime?.timezone}</h2>
          </div>
          <div>
            <h6>Day of the year</h6>
            <h2>{state.worldTime?.day_of_year}</h2>
          </div>
        </div>
        {/* right */}
        <div className="right">
          <div>
            <h6>Day of the week</h6>
            <h2>{state.worldTime?.day_of_week}</h2>
          </div>
          <div>
            <h6>Week number</h6>
            <h2>{state.worldTime?.week_number}</h2>
          </div>
        </div>
        {/* vertical line */}
        <div
          className={
            state.timeStatus === "day" ? "vertical-line day" : "vertical-line"
          }
        ></div>
      </div>
    </div>
  );
}
