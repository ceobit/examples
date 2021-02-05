// Setup

//[{artist: 'Bon Jovi'},{}, {}]
const  collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(object, id, prop, value) {

  // const arr = [0, 1, 2];
  // for (let el of arr) { // for in
  //   console.log(el);
  // }


  for (let [key, value] of Object.entries(object)) {
  }

  console.log(object);

  //console.log({...object});


  // if (prop !== "tracks" && value !== "") {
  //   object[prop] = value;
  // }
  return object;
}

updateRecords(collection, 5439, 'artist', 'ABBA');