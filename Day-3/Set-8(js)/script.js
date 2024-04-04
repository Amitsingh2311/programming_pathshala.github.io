// //loosely typed
// var age=18;
// age="done";


// //srtickly typed


// //dynamically typed
//  var age=18;


// //statically typed







// console.log('hello');
//  var message= 'hello world';
//  console.log(message);




// function eve{

// console.log(message)
// var mesaage="hello";

// console.log(message)
// var mesaage="else";

// console.log(message)

// }





// function eve(){
//     for (i = 0; i < 5; i++) {
//         document.write('---', i)
//     }
// }
// eve();





// // //datatype
// // let age = 33;
// // age=44;
// // console.log(typeof(age))


// let a;
// a="string";
// console.log(typeof(a))







// //array
// let arr=['a','b','c','d'];
// arr[0]='abcd';
// console.log(arr);




// //array,number concatenation
// let str="21";
// let age=20;
// let ans=age+str;
// console.log(ans)


// let str="21";
// let age=20;
// let ans=20-(-str);
// console.log(ans)







// //parseint(convrt string to int)
// let str='12';
// let p=parseInt(str);
// console.log(typeof(p));







// //check array are equal or not
// let a=['a','b','c','d'];
// let cpy=a;

// if(a==cpy)
// {
//     console.log('1.yes');
// }
// else
// {
//     console.log('1.yes');
// }

// if(a==cpy)
// {
//     console.log('2.yes');
// }
// else
// {
//     console.log('2.yes');
// }






// concatenation
// const str = 'Rajput';
// const username = 'my name is :';
// const ans=username+str;
// console.log(ans);





// // use of $ for adding
// const str = 'Rajput';
// const username = 'my name is :';
// const ans1= `${username}    ${str}`;
// const ans2= username+'    '+str;
// console.log(ans1);
// console.log(ans2);








// //function1
// function print(str)
// {
//     console.log(str);
// }
// const s='hello';
// print(s);



// //function2
// function print(str) {
//     console.log(str);
// }
// print('hello');



// //function3
// function print(str = 'nothing is here') {
//     console.log(str);
// }
// print();



// //function4
// function sum(a, b) {
//     if(a && b){
//         console.log(a + b);
//     }
//     else{
//         console.log(a);
//     }
// }
// sum(20,2);




// //function4
// function sum(a, b) {
//     if(a && b){
//         console.log(a + b);
//     }
//     else if(a){
//         console.log(a);
//     }
//     else{
//         console.log(0);
//     }
// }
// sum();
// sum(20);
// sum(20,2);












// //function decalartion
// function print()
// {
//     console.log('--');
// }


// //function assignment(named)
// const a=function print()
// {
//     console.log('--');
// }


// //function assignment(anonymous)
// const b=function ()
// {
//     console.log('--');
// }


// //function assignment(arroy)
// const c= () =>
// {
//     console.log('--');
// }


// print();
// a();
// b();








// //switch condition1
// let a=2;

// switch(a)
// {
//     case 1:{
//         console.log('one');
//     }
//     case 2:{
//         console.log('two');
//     }
//     case 3:{
//         console.log('three');
//     }
//     default :{
//         console.log('not 1,2,3');
//     }
// }



//switch condition2
// let a=2;

// switch(a)
// {
//     case 1:{
//         console.log('one');
//         break;
//     }
//     case 2:{
//         console.log('two');
//         break;
//     }
//     case 3:{
//         console.log('three');
//         break;
//     }
//     default :{
//         console.log('not 1,2,3');
//         break;
//     }
// }









// //obect(type1)
// const obj = new Object();
// obj[1] = 'one';
// obj[12] = 'twelve';
// obj['names'] = 'rajput';
// console.log(obj);


// //(type 2)
// const obj = {};
// obj[1] = 'one';
// obj[12] = 'twelve';
// obj['names'] = 'rajput';
// console.log(obj);


// //(type 3)
// const obj = {
//     1: 'one',
//     12: 'twelve',
//     'names': 'rajput',
// };
// console.log(obj);







// //object value call
// const obj = {
//     1: 'one',
//     'firstname':'amit',
//     'lastname' : 'rajput',
//     12: 'twelve',
    
// };
// const fullname =obj.firstname + ' ' +obj.lastname;
// const lastname = `${obj.firstname} ${obj.lastname}`;


// console.log(fullname);
// console.log(lastname);





// //pop-up(taking input from user)type1
// const x=prompt('plse tell me');
// console.log(x);

//type2
const obj ={x}
const x=prompt('plse tell me');
console.log(obj[x]);




