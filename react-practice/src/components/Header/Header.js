import React, { useContext, useEffect, useState } from "react";
import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { history } from "../../history";

import { useStyles } from "./style";
import axios from "axios";
import { URL_Search } from "../../constants";
import { AppContext } from "../../context/appContext";

export default function SearchAppBar() {
  const [search, setSearch] = useState("");
  const [state, setState] = useContext(AppContext);

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  useEffect(() => {
    (async () => {
      const res = await axios.get(URL_Search + search);
      const { data } = await res;

      setState({
        countries: data,
        currentCountry: "",
      });
    })();
  }, [search]);

  const classes = useStyles();

  const movieToMain = () => {
    history.push(`/`);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {state.currentCountry ? (
            <ArrowBackIcon
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={movieToMain}
            >
              <MenuIcon />
            </ArrowBackIcon>
          ) : null}
          <Typography className={classes.title} variant="h6" noWrap>
            Choose the country
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={search}
              onChange={handleSearch}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
