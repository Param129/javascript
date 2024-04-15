let age=23
let x="33"
let p="22abc";

let converting_str_to_num = Number(x);
let converting_non_number_to_num = Number(p);

console.log(converting_non_number_to_num); // gives nan
console.log(converting_str_to_num); //give the number




let login = 1;
let boollogin = Boolean(login);
console.log(boollogin);


let str = "";
let str1="param";
let boolstr = Boolean(str);
let boolstr1 = Boolean(str1);
console.log(boolstr) // gives false
console.log(boolstr1) // give true



let num=33;
let strnum = String(num);
console.log(typeof strnum);





// confusing part


// if first part is number that everting convert in number
// if first part is string than everthing convert in string
console.log("2"+2);  // gives 22
console.log(40-"2");  // gives 38
console.log("2"+2+2);  // gives 222
console.log(1+2+"3");  //gives 33