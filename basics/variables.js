const id = 169 // it cant be changed now if you assign another value to id it gives error
// id=90;
// console.log(id);

let email = "p@gmail.com"
email="s@gmail.com"
// console.log(email);



var pass="12345" // never use it because it ahs scope problem it changes value out of scope also (outside loop);
pass="halalal" // var has issue in block scope and funtional scope
// console.log(pass);



city="delhi"
city="shamli"
// console.log(city);


let state; // if any varible is not initialzed then its value is undefined


console.table([id,email,pass,city,state]);

/*    it it output of this table
┌─────────┬───────────────┐
│ (index) │    Values     │
├─────────┼───────────────┤
│    0    │      169      │
│    1    │ 's@gmail.com' │
│    2    │   'halalal'   │
│    3    │   'shamli'    │
│    4    │   undefined   │
└─────────┴───────────────┘

*/