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

  return <div className={detailsClass}></div>;
}
