import { useEffect } from "react";
import { useGlobalContext } from "../GlobalContext/GlobalContext";
import { actions } from "../GlobalContext/reducer";

export default function Location() {
  const { state, dispatch } = useGlobalContext();

  useEffect(() => {
    async function getCity() {
      try {
        const request = await fetch(
          `https://api.ipfind.com/me?auth=2806159f-43ab-4009-85f8-7525152d6644`
        );

        if (!request.ok) {
          return;
        }

        const response = await request.json();
        dispatch({ type: actions.SET_LOCATION, payload: response });
      } catch (error) {
        console.log(error);
      }
    }

    getCity();
  }, []);

  return (
    <div className="location">
      <h3>IN {`${state?.location?.city}, ${state?.location?.country}`}</h3>
    </div>
  );
}
