const sum =function(a,b){
    console.log(a+b);
}
const mul = function(a,b){
    console.log(a*b);
}
const name = 'amit';
console.log(name);


//type 1
module.exports = {
    fn1 : sum,
    fn2 : mul,
    'name':name
}



//type 2
module.exports = {
    sum,
    mul,
}

