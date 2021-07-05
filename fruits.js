// String.prototype.repeat = function(n) {
//  return this.repeat(n);
// }
//
//
// console.log('Hello'.repeat(3));

//
// (function() {
//   let a = b = 5;
// })();
//
// console.log(b); //5

// var fullname = 'John Doe';
// var obj = {
//   fullname: 'Colin Ihrig',
//   prop: {
//     fullname: 'Aurelio De Rosa',
//     getFullname: function() {
//       return this.fullname;
//     },
//     getFullname1: () => {
//       return this.fullname;
//     }
//   }
// };
//
// console.log(obj.prop.getFullname());
// console.log(obj.prop.getFullname1());
//
// var test = obj.prop.getFullname;
// // const fun = test.bind(obj);
//
// console.log(test.apply(obj));

// function foo1()
// {
//   return {
//     bar: "hello"
//   };
// }
//
// function foo2()
// {
//   return
//   {
//     bar: "hello"
//   };
// }
//
// console.log(foo1());
// console.log(foo2());
//
// function foo(num) {
//   console.log("foo: " + num);
//   // Отслеживаем сколько раз `foo` была вызвана
//   this.count++;
// }
// foo.count = 0;
// var i;
// for (i = 0; i < 10; i++) {
//   if (i > 5) {
//   }
//   foo.call(foo, i);
// }
// // foo: 6
// // foo: 7
// // foo: 8
// // foo: 9
// // Сколько раз была вызвана `foo`?
// console.log(foo.count); // 0 -- WTF?

// function baz() {
// // стек вызовов: `baz`
// // поэтому наша точка вызова — глобальная область видимости
//   console.log( "baz" );
//   bar(); // <-- точка вызова для `bar`
// }
// function bar() {
//   // стек вызовов: `baz` -> `bar`
//   // поэтому наша точка вызова в `baz`
//   console.log( "bar" );
//   foo(); // <-- точка вызова для `foo`
// }
// function foo() {
// // стек вызовов: `baz` -> `bar` -> `foo` // поэтому наша точка вызова в `bar`
//   console.log( "foo" );
// }
// baz(); // <-- точка вызова для `baz`

// function foo() {
//   console.log( this.a );
// }
// var a = 2;
// foo(); // 2

// function foo() {
//   console.log( this.a );
// }
// var obj = {
//   a: 2,
//   foo: foo
// }
//   obj.foo(); // 2

const unigElem = (...arg) => {
  const unig = new Set([...arg.flat()]);
  console.log([...unig]);
};

unigElem([6, 7, 8, 8], [1, 4, 7], [5, 5, 6, 9]);
