import React from "react";
import { useState } from "react";

const CountryInfo = (props) => {
  let [showCountryData, setShowCountryData] = useState(false);

  return (
    <>
      <div>
        <img
          src={props.data.flags.png}
          onClick={() => {
            setShowCountryData(!showCountryData);
          }}
        />
        {showCountryData && (
          <>
            <h2>{props.data.name.common}</h2>
            <p>Captital: {props.data.capital}</p>
            <p>Population: {props.data.population}</p>
          </>
        )}
      </div>
    </>
  );
};

export default CountryInfo;
