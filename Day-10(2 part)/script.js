

const express = require('express');
const productsRouter = require('./routes/productsRoutes.js');
const userRouter = require('./routes/userRoutes.js')
const app = express();
const mongoose = require('mongoose');
const reviewRouter = require('./routes/reviewsRoutes.js');

// const test = require('./models/productsModel.js');

app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/products/:id', productsRouter);

app.use('/api/users', userRouter);
app.use('/api/users/:id',userRouter );

app.use('/api/reviews', reviewRouter);
app.use('/api/reviews/:id',reviewRouter );


const url = 'mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.ezlc5is.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0'
const databaseUser ='amitvisean23';
const databasePassword = 'Amit1234';
const databaseName = 'Amazon-Backend';

let dblink = url.replace("$_USERNAME_$",databaseUser);
 dblink = dblink.replace("$_PASSWORD_$",databasePassword);
 dblink = dblink.replace("$_DB_NAME_$",databaseName);


mongoose.connect(dblink)
   .then(
    ()=> console.log('-------------Database Connected------------')
   );

app.listen(1400,
    ()=> console.log('-------------Database still connected------------')
);













