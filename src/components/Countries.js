import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [range, setRange] = useState(5);
  const [selectedRadio, setSelectedRadio] = useState("");

  const radioContinent = ["Africa", "Europe", "Oceania", "America", "Asia"];

  // fetch data from the api
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <ul>
        <input
          type="range"
          min={1}
          max={250}
          defaultValue={range}
          onChange={(e) => setRange(e.target.value)}
        />
      </ul>
      {radioContinent.map((continent) => (
        <li>
          <input
            type={"radio"}
            id={continent}
            name="continentRadio"
            onChange={(e) => setSelectedRadio(e.target.id)}
          />
          <label htmlFor={continent}>{continent}</label>
        </li>
      ))}
      <ul>
        {data
          .filter((country) => country.continents[0].includes(selectedRadio))

          .slice(0, range)
          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
