var a = 10;

function Hello() {
  var b = 15;
  console.log(a);
  a = 20;
  console.log(b);
}

// Hello();

c = 35;

// console.log(a);
// console.log(b);
// console.log(c);

// {
//   let hmm = [155, 25];
//   console.log(hmm);
//   hmm = [200, 252];
//   console.log(hmm);
// }

// console.log("hello " + 10 + " " + 20);

// console.log(`Hello ${10 + 20} ${20}`);

// console.log(2 + 4 + "25" + 5);
// console.log("200" + 5);

// var a = undefined;

// var a = 15;

// function Outer() {
//   console.log(a);
//   var a = 10;
//   // console.log(a);

//   function Inner() {
//     var b = 15;
//     console.log("outer", a);
//     console.log("inner", b);
//   }
//   Inner();
//   // console.log("inner", b);
// }

// Outer();
let tax,
  tips,
  mainCost = 2000;

function HowAreYou(tax = {}, mainCost, tips = 0) {
  console.log("total: ", tax + mainCost + tips);
}

// HowAreYou(tax, mainCost, tips);

// let Obj = {
//   name: "Shahan",
//   age: "Why should I say you? :P",
//   showName: function() {
//     return this.name;
//   }
// };

// console.log(Obj.showName());

const Destruc = {
  name: "We Are Learner",
  founder: "Saroar Shahan"
};

const { name: KiDibo, founder } = Destruc;

console.log(KiDibo);
console.log(founder);
