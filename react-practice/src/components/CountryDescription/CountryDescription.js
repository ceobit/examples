import React, { useContext, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { URL_Search } from "../../constants";
import { AppContext } from "../../context/appContext";

const useStyles = makeStyles({
  root: {
    width: 800,
    display: "flex",
    justifyContent: "space-between",
    margin: "10% auto 10% auto",
    cursor: "default",
  },
  media: {
    height: 400,
    width: 600,
    cursor: "default",
  },
  content: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    height: "100%",
    cursor: "default",
  },
  description: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
    height: "100%",
    cursor: "default",
  },
});

const CountryDescription = (props) => {
  const [state, setState] = useContext(AppContext);
  const { match } = props;

  const classes = useStyles();

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

  let country;
  if (state.currentCountry) {
    country = state.currentCountry[0];
  }

  return country ? (
    <Card className={classes.root}>
      <CardActionArea className={classes.content}>
        <CardMedia className={classes.media} image={country.flag} />
        <CardContent className={classes.description}>
          <Typography gutterBottom variant="h5" component="h2">
            Hello I'm {country.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>Capital: {country.capital}</p>
            <p>
              Languages:{" "}
              {country.languages.map((language) => language.name).join(" ")}
            </p>
            <p>
              Currencies:{" "}
              {country.currencies.map((currency) => currency.name).join(" ")}
            </p>
            <p>Population: {country.population}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ) : (
    <div>Nothing</div>
  );
};

export default CountryDescription;
