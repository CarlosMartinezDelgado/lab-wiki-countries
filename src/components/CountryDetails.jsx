import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function CountryDetails() {
  const { alpha3Code } = useParams();
  const [detailsCountry, setDetailsCountry] = useState(null);

  const getDetails = async () => {
    const response = await axios.get(
      `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`
    );
    setDetailsCountry(response.data);
  };

  useEffect(() => {
    getDetails();
  }, [alpha3Code]);

  if (!detailsCountry) {
    return <div>... Loading</div>;
  }

  return (
    <div>
      <div>CountryDetails</div>
      <div>
        <h3>{detailsCountry.name.common}</h3>
        <h6>{detailsCountry.capital}</h6>
      </div>
      <div>
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${detailsCountry.alpha2Code.toLowerCase()}.png`}
          alt="country"
        />
        
      </div>
    </div>
  );
}

export default CountryDetails;
