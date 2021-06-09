import React, { useContext, useEffect } from "react";
import axios from "axios";
import { URL_Search } from "../../constants";
import { AppContext } from "../../context/appContext";

const CountryDescription = (props) => {
  const [state, setState] = useContext(AppContext);
  const { match } = props;

  useEffect(() => {
    (async () => {
      const res = await axios.get(URL_Search + match.params.name);
      const { data } = await res;

      setState({
        countries: state.countries,
        currentCountry: data,
      });
    })();
  }, []);

  return (
    <div>
      <h1>Hello I'm {state.currentCountry[0].name}</h1>
    </div>
  );
};

export default CountryDescription;
