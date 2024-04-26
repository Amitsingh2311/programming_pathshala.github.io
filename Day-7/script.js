
////(access the file through to string)
// const fs = require('node:fs');
// const data = fs.readFileSync('./myinfo.txt');
// console.log(data);
// console.log(data.toString());


//// access  the file through (encoding:)
// const fs = require('node:fs');
// const data = fs.readFileSync('./myinfo.txt',{encoding: 'utf-8'});
// console.log(data);


////(only use fs)
// const fs = require('fs');
// const data1 = fs.readFileSync('./myinfo.txt',{encoding: 'utf-8'});
// console.log(data1);









// //(buffer)
// const b= new Buffer.from('ABCCD');
// console.log(b.toString());
// b.write('other');
// console.log(b.toString());





////(create .text file and read this file through file_function)
// const fs = require('fs');
// fs.writeFileSync('./log.txt',"10th april");
// const data1 = fs.readFileSync('./log.txt',{encoding: 'utf-8'});
// console.log(data1);










// const fs = require('fs');
// console.log("start");
// const data1 = fs.readFileSync('./myinfo.txt',{encoding: 'utf-8'});
// console.log(data1);
// console.log('end');











//(access the txt file with promises)
// const fspromises = require('fs/promises');
// console.log("start");
// const pr = fspromises.readFile("./myinfo.txt", {encoding : 'utf-8'});
// console.log(pr);

// pr.then((res)=>{
//     console.log(res);
// })
// console.log("end");














//callback in file system
// const fs = require('fs');

// fs.readFile("./myinfo.txt", {encoding : 'utf-8'},(err,data) =>{
//     console.log(data);
// })






// https://localhost:1400/

// (server creation)
// const http = require('http');

// const server = http.createServer((req,res)=>{
//     console.log('request recieved');

//     // console.log(req.url);
//     // console.log(Object.keys(res));

//     console.log(req.url);
//     res.writeHead(200,{
//         'content-type' : 'text/html',
//     })
//     res.end();
// });


// server.listen(1400 , ()=>{
//     console.log('hello amist .......server start');
// });













// //(making html body)
// const http = require('http');
// const fs = require('fs');

// const data = fs.readFileSync('./data.json','utf8');
// const dataobj = JSON.parse(data);                      //CONVERT RAW DATA TO OBJECT DATA
// const products = dataobj.product;
// // console.log(dataobj);

// const htmlTemplate = `
//     <!DOCTYPE HTML> 
//     <html>
//       <head>
//         <style>
//           .product-card{
//             width:400px;
//             margin:60px 440px;
//             border: 3px dashed brown;
//             border-radius:8px;
//             padding:28px;
//           }
//           .flex{
//             display:inline;
//           }
//         </style>
//       </head>
//       <body style="background-color:brown">
//       __PRODUCT__CARD__
//        </body>
//     </html>`

// const cardtemplate = `<div class='flex'><div class='product-card' style="background-color:blueviolet;color:wheat;font-size:32px;">
//                              <h4 style="background-color:darkgrey; color:black; border-radius:10px;">__TITLE__</h4>
//                              <p style="font-size:20px">__INFO__</p>
//                            </div> </div>`



//     const card1 = cardtemplate.replace(`__TITLE__`,`Xiaomi Note 11 pro`).replace(`__INFO__`, `this is a chinese mobile`);
//     const card2 = cardtemplate.replace(`__TITLE__`,`Iphone 15`).replace(`__INFO__`, `this is also a chinese mobile`);
//     const card3 = cardtemplate.replace(`__TITLE__`,`vivo z1 pro`).replace(`__INFO__`, `this is also a chinese mobile`);
//     const card4 = cardtemplate.replace(`__TITLE__`,`MI pro`).replace(`__INFO__`, `this is also a chinese mobile`);
//     const allcard = card1+card2+card3+card4;
//     // const page = htmlTemplate;
//     const page = htmlTemplate.replace(`__PRODUCT__CARD__`,allcard);

// const server = http.createServer((req,res)=>{
//     console.log(req.url);
//     res.writeHead(200,{'content-type' : 'text/html', })
//     res.end(page);
// });

// server.listen(1400 , ()=>{
//     console.log('hello amist .......server start');
// });




















// const http = require('http');
// const fs = require('fs');

// const data = fs.readFileSync('./data.json', 'utf8');
// const dataobj = JSON.parse(data);                      //CONVERT RAW DATA TO OBJECT DATA
// const products = dataobj.product;
// // console.log(dataobj);

// const htmlTemplate = `
//     <!DOCTYPE HTML> 
//     <html>
//       <head>
//         <style>
//           .product-card{
//             max-width:550px;
//             margin:20px auto;
//             border: 3px dashed brown;
//             border-radius:8px;
//             padding:16px;
//           }
//         </style>
//       </head>
//       <body>
//       __PRODUCT__CARD__
//        </body>
//     </html>`

// const cardtemplate = `<div class='product-card' style="background-color:green;color:orange;font-size:32px;">
//                              <h4>__TITLE__</h4>
//                              <p>__INFO__</p>
//                            </div> `



// const card1 = cardtemplate
//     .replace('_TITLE_', products[0].title)
//     .replace('_INFO_', products[0].description);


// const card2 = cardtemplate
//     .replace('_TITLE_', products[1].title)
//     .replace('_INFO_', products[1].description);

// const card3 = cardtemplate
//     .replace('_TITLE_', products[2].title)
//     .replace('_INFO_', products[2].description);

// const allCards = card1 + card2 + card3;


// console.log(card1);
// console.log(card2);
// console.log(typeof (card2));
// console.log(typeof (card2));


// const page = htmlTemplate.replace(`__PRODUCT__CARD__`, allcard);
// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     res.writeHead(200, { 'content-type': 'text/html', })
//     res.end(page);
// });

// server.listen(1400, () => {
//     console.log('hello amist .......server start');
// });



















const http = require('http');
const fs = require('fs');
const data = fs.readFileSync('./data.json', 'utf8');
const dataObj = JSON.parse(data);
const products = dataObj.products;

const htmlTemplate = `
<!DOCTYPE HTML>
<html>
<head>
    <title>Product List</title>
            <style>
          .product-card{
            max-width:550px;
            margin:20px auto;
            border: 3px dashed brown;
            border-radius:8px;
            padding:16px;
          }
        </style>
</head>
<body>
    <div class="container">
        product
    </div>
</body>
</html>
`;

const cardTemplate = `
<div class='product-card'>
    <h4>_TITLE</h4>
    <p>_INFO</p>
    <img src="_IMAGE"></img>

</div>
`;

const allCards = dataObj.carts.map((elem) => {
    let newCard = cardTemplate;
    newCard = newCard.replace('_TITLE', elem.title);
    newCard = newCard.replace('_INFO', elem.description);
    newCard = newCard.replace('_IMAGE', elem.images);
   
    return newCard;
});

const allCardsString = allCards.join(' ');

const page = htmlTemplate.replace('product', allCardsString);

const app = http.createServer((req, res) => {
    console.log('received');
    console.log(req.url);
    if (req.url === '/styles.css') {
        const cssFile = fs.readFileSync('./styles.css', 'utf8');
        res.writeHead(200, { 'Content-type': 'text/css' });
        res.write(cssFile);
        res.end();
    } else {
        res.writeHead(200, {
            'Content-type': 'text/html',
        });
        res.end(page);
    }
});

app.listen(1400, () => {
    console.log("-----------server started----------------");
});




