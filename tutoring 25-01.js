// const - try to use always
// let - will change
// var - don't use this

const str = '';
const num = 5;

const arr = [];

const funct = () => {

}

let say = ''; // it is global scope

const fun = num => {
  // here is function scope
  // if we decl var. inside func. scope than we can't use this var. in global scope, but we can use
  // var. inside nested block's scopes
  const age = 100
  if (num > 20) {
    // here is blocks (loops, condition exp.) scope
    // if we decl var. inside block's scope than we can't use this var. in func. scope and global scope
     say = `Hi i'm adult because i'm ${num}`;
  }

  console.log(say);

  Math
}

fun (25);







