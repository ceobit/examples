// import React, { useEffect, useState } from "react";
// import classes from "./searchBar.module.css";
// import axios from "axios";
// import { URL_Search } from "../../constants";
//
// const SearchBar = () => {
//   const [search, setSearch] = useState("");
//
//   const handleSearch = (e) => {
//     console.log("1");
//     const { value } = e.target;
//     setSearch(value);
//   };
//
//   useEffect(() => {
//     (async () => {
//       const res = await axios.get(URL_Search + search);
//       const { data } = await res;
//
//       setState({
//         countries: data,
//         currentCountry: "",
//       });
//     })();
//   }, [search]);
//
//   return (
//     <>
//       <div className={classes.searchInput}>
//         <label>
//           <input
//             type="text"
//             placeholder="Search for a country... "
//             value={search}
//             onChange={handleSearch}
//           />
//         </label>
//       </div>
//     </>
//   );
// };
// export default SearchBar;
