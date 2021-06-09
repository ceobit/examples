import React, { useContext, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { URL_Search } from "../../constants";
import { AppContext } from "../../context/appContext";

const useStyles = makeStyles({
  root: {
    width: 600,
    display: "flex",
    justifyContent: "space-between",
  },
  media: {
    height: 400,
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
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
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Hello I'm {country.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ) : (
    //   <div className={classes.description}>
    //     <h1>Hello I'm {country.name}</h1>
    //     <img src={country.flag} alt="flag" />
    //     <p>{country.capital}</p>
    //     <p>{country.languages.map((language) => language.name).join(" ")}</p>
    //     <p>{country.currencies.map((currency) => currency.name).join(" ")}</p>
    //     <p>{country.population}</p>
    //   </div>
    <div>Nothing</div>
  );
};

export default CountryDescription;
