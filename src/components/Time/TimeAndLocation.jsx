import { useGlobalContext } from "../GlobalContext/GlobalContext";
import Greeting from "./Greeting";
import Hours from "./Hours";
import Location from "./Location";
import "./time&location.scss";

export default function TimeAndLocation() {
  const { state } = useGlobalContext();
  return (
    <section className="time-and-location">
      <Greeting />
      <Hours />
      {state.location && <Location />}
    </section>
  );
}
