//import React, { useState, Fragment } from "react";
import React, {useState} from 'react';
import Footer from './components/Footer/Footer';
import List from './components/List';
import ToDos from './components/ToDos';
import Layout from './components/Layout';

function App() {

  // function movies (intialMovie) {
  //
  //   let currentMovie = intialMovie;
  //
  //   const changeWhatYouWant = (newMovie) => {
  //     currentMovie = newMovie;
  //   }
  //
  //   return [currentMovie, changeWhatYouWant];
  // }
  //
  // const [movie, changeWhatYouWant] = movies(['Tom and Jerry']);
  //
  // console.log(movie);
  // changeWhatYouWant([...movie, 'Simpson']);



  const [list, setList] = useState([]);

  const check = (itemToCheck) => {
    // itemToCheck has the id for that specific item
    console.log(itemToCheck);
    const newArr = list.filter((item) => {
      if (item.id === itemToCheck) {
        // revers done
        item.done = !item.done;
      }
      return item;
    });

    setList(newArr);
  };
  // React Fragments allow you to wrap multiple elements without adding an extra node to the DOM. This can be useful when rendering multiple child elements/components in a single parent component.
  return (
    <>
      <List setList={setList}/>
      <ToDos list={list} setList={setList} check={check}/>
    </>
  );
}

export default App;