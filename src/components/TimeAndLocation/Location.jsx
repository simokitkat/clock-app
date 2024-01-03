import { useGlobalContext } from "../GlobalContext/GlobalContext";

export default function Location() {
  const { state } = useGlobalContext();

  return (
    <div className="location">
      <h3>IN {`${state?.location?.city}, ${state?.location?.country_name}`}</h3>
    </div>
  );
}
