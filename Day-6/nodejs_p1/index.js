// function sum(a,b){
//     console.log(a+b);
// }

// sum(20,3);




// //type-1(call)
// const obj = require('./module1');
// obj.fn2(20,3);



// //type-2(call)
// const obj = require('./module1');
// obj.sum(20,3);





//object distructuring(without using .obj)
const {sum,name} = require('./module1');
sum(20,3);
console.log(name);

