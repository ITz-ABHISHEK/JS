const name = "ABHISHEK"
const repoCount = 40

//console.log(name + repoCount + "value");

console.log('Hello my name is ${name} and my repo count is ${repoCount}');

const gameName = new String('abhishek-raj')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-9,4)
console.log(anotherString);

const newStringOne = "  Abhishek  "
console.log(newStringOne.trim());

const url = "https:// abhishek.com/abhishek%20raj"
console.log(url.replace('%20','-'));

console.log(url.includes('nature'));

console.log(gameName.split('-'));


