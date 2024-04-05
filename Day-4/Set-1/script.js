// let a = new
//     String("hello");
// let b = "hello";


// if (a == b) {
//     console.log("yes");
// }
// else {
//     console.log("no");
// }






// //nomral js
// const obj = {
//     name: 'amit',
//     lastname: 'rajput'
// };

// console.log(obj);





// //in j.son (every string double quotes "")
// const obj1 = {
//     "name": "amit",
//     "lastname": "rajput"
// };
// obj1.name=29;      // change in exsiting array
// console.log(obj1);






// //new string add in obj
// const obj1 = {
//     "name": 'amit',
//     "lastname": 'rajput'
// };
// obj1.age=29;
// console.log(obj1);
// //console.write(obj1);






// //check the array or not
// const obj1 = {
//         "name": 'amit',
//         "lastname": 'rajput'
//     };
// const arr=[1,2,3,4];

// console.log(Array.isArray(obj1))
// console.log(Array.isArray(arr))







// //check array or object
// const obj1 = {
//     "name": 'amit',
//     "lastname": 'rajput'
// };
// function checkobj1(x){
//     if(Array.isArray(x)){
//         console.log("not object");
//     }
//     else 
//     {
//         console.log("object");
//     }
// }
// checkobj1(obj1);







// console.log(window)
// console.log(innerHeight)
// console.log(innerWidth)
// console.log(window.innerHeight)
// console.log(window.innerWidth)



// //it show the all info about document
// console.log(window.document)
// console.log(window)


// console.dir(window.document)
// console.dir(window)








// // //selecter in dom(js)(by tag)
// const res=document.getElementsByTagName('h2');
// console.log(res);



// //selecter in dom(js)(by id)
// const result=document.getElementById('ht1');
// console.dir(result);



// //selecter in dom(js)(by query selector)
// const result1=document.querySelector('h4');
// console.dir(result1);





// //selecter in dom(js)(by query selector)
// //when we findout h1,h2,etc through class or id
// const result2=document.querySelector('h4#ht1');
// console.dir(result2);

// const result3=document.querySelector('h4.ht1');
// console.dir(result3);






// //selecter in dom(js)(by id)
// const result=document.getElementById('ht1');
// result['innertext']="hello,world!";
// result.innertext='hello,world!';

// console.dir(result);





// //div access by tag name

// const result=document.getElementsByTagName('div');
// console.log(result);



// //change in html through this js
// const result=document.getElementsByTagName('div');
// result[0].innerHTML="<h4>hello guys</h4>";
// result[0].innerText="<h4>hello guys</h4>";
// console.log(result);

// //change in css through this js
// result[0].setAttribute('class','c1');







// //add content on html page in last
// const ne=document.createElement("h3");
// ne.innerText="dynamic text";
// console.log(ne);
// document.body.appendChild(ne);




// //it use for add content in middle of html page
const ne=document.createElement("h3");
ne.innerText="dynamic text";
// console.log(ne);
const firstDiv=document.getElementsByTagName('div')
firstDiv[2].appendChild(ne);


//preppend opposite of append















