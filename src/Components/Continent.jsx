import React, { useEffect } from "react";
import { useState } from "react";
import CountryInfo from "./CountryInfo";

const Continent = (props) => {
  const [countries, setCountries] = useState(null); //fetch
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/region/${props.data}`
      );
      const json = await response.json();
      setCountries(json);
    };
    getData();
  }, []);


  return (
    <>
      <div>
        {countries &&
          countries.map((obj, index) => {
            return (
              <>
                <CountryInfo data={obj}/>
              </>
            );
          })}
        {/* {countryInfo && <CountryInfo data={coutries && coutries} />} */}
        {/* onClick={() => {setCountryInfo(!countryInfo)}} */}
      </div>
    </>
  );
};

export default Continent;
