

// setTimeout(()=>{console.log('amit')},3000);
// console.log('start');
// setTimeout(()=>{console.log('rajput')},6000);
// console.log('intermediate');
// console.log('end');






//createOrder()
//makepayment()



// //callback
// function createOrder(x, fn) {
//     console.log(x);

//     setTimeout(() => { console.log('amit') }, 4000);
//     setTimeout(() => { console.log('rajput') }, 6000);
// }

// function makepayment(orderID) {
//     console.log(orderID);
// }

// createOrder('soap', makepayment);









// //promises(type-1)
// let id = 'userID123';
// const pr = new Promise((resolve, reject) => {
//     //logic
//     if (id == 'userID123') {
//         resolve('amit');
//     }
//     else {
//         reject();
//     }
// })
// console.log(pr);






// //type-2
// const pr = new Promise((resolve, reject) => {
//     //logic
//     if (true) {
//         setTimeout(() => {
//             resolve('resolve');
//         }, 5000)
//     }
//     else {
//         reject();
//     }
// })
// console.log(pr);


// pr.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err)
// })







// //what is call first in this code
// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {reject('some items are pout of stack')}, 5000)      //show first this in console

// });

// setTimeout(() => {console.log('first timeout.....')},0);                   //show second this in console  
// // console.log(pr);


// pr.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err)
// })









// // javascript visualize 9000

// setTimeout(function abc() { console.log('first timeout.....') }, 0);


// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => { reject('done') }, 0)

// });

// setTimeout(() => { console.log('first timeout.....') }, 0);
// // console.log(pr);


// pr.then(function b(res) { 
//     console.log("promise completed"), res });

// setTimeout(function abc() { console.log('first timeout.....') }, 0);

















//map function(fuction performe with every element of array)
// console.log('hello');
// const arr =[10,30,49];

// const ans = arr.map((a)=>{
//     console.log(a);
//     return a*2;
// });

// console.log(ans);








// //FILTER
// const arr =[10,40,30,49];

// const ans = arr.filter((a)=>{
//     if(a>20)return true;
//     else return false;
// })

// console.log(arr);
// console.log(ans);









// // take the value in which i or I will bw present(using filter)
// const arr =['delhi','mumbai','chennai','kolkata','pune','india','russia','USA']

// const ans = arr.filter((s)=>{
//     if(s.includes('i') || s.includes('I')){
//         return true;
//     }
//     else false;
// });
// console.log(ans);












// //filter (with tolowercase)
// const arr =['Delhi,India','Mumbai-india','Chennai','kolkata','pune','india','russia','USA']

// const ans = arr.filter((s)=>{
//     const sm =s.toLowerCase();
//     if(sm.includes('india')){
//         return true;
//     }
//     else false;
// });
// console.log(sm);











// //reduce(number)
// const arr=[10,22,34,50];

// const ans = arr.reduce((total,curr,c,d)=>{
//     // console.log(a,b,c,d);
//     return total+curr;
// });
// console.log(ans);







//reduce(string)
const arr=['ab','cd','xy','z'];

const ans = arr.reduce((total,curr)=>{
    // console.log(a,b,c,d);
    return total+curr;
});
console.log(ans);
