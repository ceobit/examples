import React from "react";

const CountryDescription = (props) => {
  const { match } = props;

  return (
    <div>
      <h1>Hello I'm {match.params.id}</h1>
    </div>
  );
};

export default CountryDescription;
