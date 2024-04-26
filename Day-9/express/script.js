// console.log("hello");

const express = require('express');
const fs = require('fs');
const fspromises = require('fs/promises');


const app = express();

app.get('/api/products',async(req,res)=>{
    // const data = fs.readFileSync('./data.json',"utf8");
    
    // const obj = JSON.parse(data);
    // res.json(obj);

    const data = await fspromises.readFile('./data.json',"utf8");
    const arr = JSON.parse(data);
    res.json({
        status:'success',
        result:arr.length,
        data:{
            products: arr
        }
    });


});








app.use(express.json());
app.post('/api/products',async (req,res)=>{
    // console.log(Object.keys(req));
    const data=req.body;
    // data.id = 121;
    // console.log(data);

    const db = await fspromises.readFile("./data.json","utf8");
    const arr = JSON.parse(db);
    const len= arr.length;
    const newProduct = data;
    if(len==0){

        newProduct.id = 1;
    }
    else{
        
        newProduct.id = (arr[len-1].id)+1;
        
    }
    arr.push(newProduct);
    fs.promises.writeFile("./data.json",JSON.stringify(arr));

    res.json({
        status:'success',
        result:1,
        data:{
            newProduct : newProduct
        }
    });

    // res.send("progress");
})










// app.put('/api/products/:id',async(req,res)=>{

//     const arr = JSON.parse(await fspromises.readFile("./data.json","utf8"))

//     // const data = req.body;
//     // console.log(data);

//     const reqId = req.params.id;
//     const data = req.body;
//     const newArr = arr.map((elem)=>{
//         if(elem.id==reqId)return data;
//         else return elem;
//     })
//     fspromises.writeFile("./data.json","utf8");
// })










app.delete('/api/products/:id',async(req,res)=>{

    const reqId = parseInt(req.params.id);
    const arr = JSON.parse(await fspromises.readFile("./data.json","utf8"));
    const newArr = arr.filter((elem)=>{
        if(elem.id==reqId)return false;
        else return true;
    });
    fspromises.writeFile("./data.json",JSON.stringify(newArr));
    res.json({
        status:'success',
        result:1,
        data:{
            newProduct:null,
        }
    });
})






app.listen(1800);