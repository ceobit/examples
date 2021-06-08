const URL = "https://restcountries.eu/rest/v2/all";
const URL_Search = `https://restcountries.eu/rest/v2/name/`;

const initialState = {
  countries: [],
  currentCountry: "",
};

export { URL, initialState, URL_Search };
