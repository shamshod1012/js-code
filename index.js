export default function doSomething() {}
export function doSomething() {}

const myComponent = () => {
  return <div></div>;
};

let age = 10;
let name = "pedro";
if (age > 10) {
  name = "pedro";
} else {
  name = "jack";
}
/*
===============================
*/

let Age = 16;
let Name = Age > 10 || "Pedro";

/*
===============================
*/
let AGe = 13;
let NAme = AGe > 10 ? "pedro" : "jack";

let Component = () => {
  return AGe > 10 ? <div> pedro </div> : <div> jack </div>;
};

let person = {
  name2: "pedro",
  age2: "20",
  isMarried: false,
};
let { name2, age2, isMarried } = person;
/*
==================================
*/
let persoN = {
  name2,
  age2,
  isMarried: true,
};

/*
====================================
*/
let persON = {
  name2,
  age2,
  isMarried: true,
};
let person2 = { ...persON, name: "shamshod" };
/*
===================================
*/
let names = ["pedro", "jack", "jessica"];
let names2 = [...names, "julia"];
/*
===================================
 */
let names3 = names.filter((name) => {
  return name !== "jack";
});

let names4 = names.filter((name) => {
  return name + "1";
});
