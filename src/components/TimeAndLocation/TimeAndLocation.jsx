import { useGlobalContext } from "../GlobalContext/GlobalContext";
import Greeting from "./Greeting";
import Hours from "./Hours";
import IsMoreButton from "./IsMoreButton";
import Location from "./Location";
import "./time&location.scss";

export default function TimeAndLocation() {
  const { state } = useGlobalContext();
  return (
    // <section className="time-and-location">
    <section
      className={state.isMore ? "time-and-location top" : "time-and-location"}
    >
      <div className="details">
        {state.timeNow && (
          <>
            <Greeting />
            <Hours />
          </>
        )}
        {state.location && <Location />}
      </div>

      <div className="more-button">{state.location && <IsMoreButton />}</div>
    </section>
  );
}
