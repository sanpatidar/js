const name = "Sanskar";
const repoCount = 50;

console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// String is Object

const gameName = new String("Sanskar-pa-com");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf("s"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-6, 4);
console.log(anotherString);

const newStringOne = "  Sanskar  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sanskar.com/sanskar%20patidar";
console.log(url.replace('%20','-'));

console.log(url.includes('Boy'));

console.log(gameName.split('-'));