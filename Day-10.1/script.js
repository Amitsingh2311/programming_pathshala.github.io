// console.log("hello");

const express = require('express');
const fs = require('fs');
const fspromises = require('fs/promises');
const app = express();
app.use(express.json());

const productController = require("./controllers/productscontrollers.js");
const userController = require("./controllers/usersController.js");
const productRouter = require('./routes/productRoute.js')
const userRouter = require('./routes/userRoute.js')


app.use('/api/products',productRouter);
app.use('/api/users',userRouter);








//get function
app.get('/api/products', productController.getAllProducts);
app.get('/api/users', userController.getUser);






//post function
app.post('/api/products', productController.addProduct );                          //
app.post('/api/users', userController.postUser);




//delete function
app.delete('/api/products/:id',productController.dltProduct )
app.get('/api/users', userController.dltUser);




app.listen(1900);








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

// app.put('/api/products', async (req, res)=>{
//     res.status(501);
//     res.json({
//         status:'falt',
//         message:'route is not yet implemented',
//     })
// })

















//(middleware function)
// app.use((req,res,next)=>{
//     console.log('request received...');
//     next();
// })


// app.use((req, res, next) => {
//     // fspromises.writeFile("./log.txt",req.url);              //overwrite the content
//     fspromises.appendFile("./log.txt", req.url);           //add content after exit content

//     const time = new Date().toLocaleString();                        //convert the time(date) in normal form
//     fspromises.writeFile("./log.txt", req.url + '\t' + time + '\n');
//     next();
// })



















