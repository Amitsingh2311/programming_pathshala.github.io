console.log('hello');


const htmlTemplate = `
<!DOCTYPE HTML>
<html>
<head>
    <title>Product List</title>
</head>
<body>
    <div class="container">
        product
    </div>
</body>
</html>
`;



const fs = require("fs");                                      //access file(objects)
const http = require("http");
const path = require("path");
const url = require("url");                          //create server
const data = fs.readFileSync("./data.json", "utf8");               //data read

const dataobj = JSON.parse(data).products;                             //data convert string to object

// console.log(dataobj);


const cardTemplate = `
   <div class="product-card" 
   style="border:3px dashed purple; width:500px; margin:20px auto; padding:40px 20px;text-align:center;" >
       <img src ="img-x"  alt='product-image'/>
       <h3 style="font-size:28px; text-decoration:4px wavy underline">TITLE</h3>
       <h5 style="font-size:17px; text-decoration:2px wavy underline">description<h5>
       <a href = "link">More Info....</a>
   </div>  `;


const input = `
   <form action ='/product'>
      <input type="text" name="ProductName">
      <button type="submit">Search</button>
   </form> `


const cards = htmlTemplate.replace('product', cardTemplate);

let result = [];
for (let i = 0; i < dataobj.length; i++) {
    let temp = cards;
    temp = temp.replace('TITLE', dataobj[i].title);
    temp = temp.replace('img-x', dataobj[i].images[0]);
    temp = temp.replace('description', dataobj[i].description);
    temp = temp.replace('link', `/product?id=${i}`);
    result.push(temp);
}
// console.log(result);

result = result.join(' ');
const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    // const route = req.url;
    // console.log(route);
    // const path = url.parse(req.url,true);                          //path fetch

    // const pathname=path.pathname;
    // const {pathname}= url.parse(route);
    const { pathname, query } = url.parse(req.url, true);                //pathname,query fetch
    //   const q=path.query;

    if (pathname == '/home') {
        res.end(input + result);
    }
    else if (pathname == '/product') {

        const id = query.id;
        const pName = query.ProductName;
        // if (id) {
        //     const item = dataobj[id];
        //     res.end(`<div>
        // <h4>Title:${item.title}</h4>
        // </div>`)
        // }
        // else
         if (pName) {
            const searchNameResult = dataobj.filter((elem) => {
                if (elem.title.includes(pName)) {
                    return true;
                }
                else {
                    return false;
                }
            })
            res.end(JSON.stringify(searchNameResult));
        }
        else {
            res.end('<h3>error....</h3>');
        }

        // const item = dataobj[id];
        // // console.log(id);
        // res.end(`<div>
        // <img src = "${item.images[0]}" alt = "picture"/>
        // <h4>Title:${item.title}</h4>
        // <h4>Description:${item.description}</h4>
        // <h4>Price:${item.price}</h4>
        // <h4>Brand:${item.brand}</h4>
        // <h4>Category:${item.category}</h4>
        // </div>`)

    }
    else {
        res.end('not found');
    }
    // res.end(result);                                            //give response on server site
});
server.listen(1400);                                         //localhost port no.(acc. to us)










