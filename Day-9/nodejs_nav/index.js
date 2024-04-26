console.log("Hello World!");


const fs = require('fs');
const http = require('http');
const url = require('url');

const data = fs.readFileSync('./data.json', 'utf8');

const dataobj = JSON.parse(data).products;

const htmlTemp = `
<html>
    <head>
       <title>Dummy Data</title>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>
    <body>
        <nav>_NavBar_</nav>
        <h4>_Products_</h4>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </html>
`;

const cardTemp = `

<div class="product-card" 
   style="border:3px dashed purple; width:510px; margin:20px auto; text-align:center; border-radius:3px;" >
       <img src ="img-x"  alt='product-image'/>
       <h3 style="font-size:28px; text-decoration:4px wavy underline">TITLE</h3>
       <h5 style="font-size:17px; text-decoration:2px wavy underline">description<h5>
       <a href = "link">More Info....</a>
   </div>  `;


const cardTempNav = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>
`;


// console.log(cardTemp);

const nav = htmlTemp.replace('_NavBar_', cardTempNav);
const cards = htmlTemp.replace('_Products_', cardTemp);



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
const total= nav+result;

result = result.join(' ');
const server = http.createServer((req, res) => {
    // const route = req.url;
    // console.log(route);
    // const path = url.parse(req.url,true);                          //path fetch

    // const pathname=path.pathname;
    // const {pathname}= url.parse(route);
    const { pathname, query } = url.parse(req.url, true);                //pathname,query fetch
    //   const q=path.query;

    if (pathname == '/home') {
        res.end(total);
    }
    else if (pathname == '/product') {

        const id = query.id;
        const item = dataobj[id];
        // console.log(id);
        res.end(`<div>
        <img src = "${item.images[0]}" alt = "picture"/>
        <h4>Title:${item.title}</h4>
        <h4>Description:${item.description}</h4>
        <h4>Price:${item.price}</h4>
        <h4>Brand:${item.brand}</h4>
        <h4>Category:${item.category}</h4>
        </div>`)

    }
    else {
        res.end('not found');
    }
    // res.end(result);                                            //give response on server site
});
server.listen(1500);



















// let res ={};
// for(let i=0; i<dataObj.len; i++){

// }
// //server Creation

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/html'});
//     res.end(cards);

// }).listen(1500);