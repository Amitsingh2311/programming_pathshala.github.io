

// //onchange function using button
// const namechange = () => {
//     console.log('firstname');
// }



// //find objects 
// const namechange = (e) => {
//     console.log(e);    
// }




// //find e value
// const namechange = (e) => {
//     console.log(e);
//     console.log(e.target.value);

// }



// //onkeyup
// const namechange = (e) => {
//   
//     const val = e.target.value;

//     if(val.length>1){
//     console.log('correct');}





// //onkeydown
// const namechange = (e) => {
//     const val = e.target.value;

//     if(val.length>4){
//     console.log('correct');}





// //print object after submit button clicked
// const submitform = (e) => {
//     e.preventDefault();
//     console.log(e);
//     document.write('amit rajput ');
// }







// const submitform = (e) => {
//     e.preventDefault();
//     const t=e.target
//     for(let i=0; i<t.length; i++)
//     {

//         // console.dir(t[i]);
//         //console.dir(t[i].value);

//         console.dir(t[i].type,t[i].value);


//     }
// }







// find the checkbox are checked or not (it show true or false)
const submitform = (e) => {
    e.preventDefault();
    const t = e.target
    for (let i = 0; i < t.length; i++) {
        const ty = t[i].type;
        const vl = t[i].value;
        console.log(ty, vl);
        if (ty == 'checkbox') {
            console.log(t[i].checked)
        }
    }
}






 

//validation?










//higher order
//


function sum(a,b,fun)
{
    const ans= a+b;
    fun(ans);
}

function print(x)
{
    console.log('    ****', x , '****     ');
}

sum(3,4,print)









