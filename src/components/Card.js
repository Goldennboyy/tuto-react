import React from "react";

const Card = ({ country }) => {
  console.log(country);
  return (
    <li>
      <img src={country.flags.svg} alt={"drapeau"} width={100} height={50} />
      <div>
        <h2>{country.translations.fra.common}</h2>
        <h4>{"La capitale est : " + country.capital}</h4>
        <p>{country.population.toLocaleString()}</p>
      </div>
    </li>
  );
};

export default Card;
