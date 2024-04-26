const fs =require('fs');
const fspromises = require('fs/promises');



const getAllProducts = async (req, res) => {
    // const data = fs.readFileSync('./data.json',"utf8");

    // const obj = JSON.parse(data);
    // res.json(obj);

    const data = await fspromises.readFile('./data.json', "utf8");
    const arr = JSON.parse(data);
    res.status(200);
    res.json({
        status: 'success',
        result: arr.length,
        data: {
            products: arr
        }
    });
}



 
const addProduct = async (req, res) => {
    // console.log(Object.keys(req));
    const data = req.body;
    // data.id = 121;
    // console.log(data);
    const db = await fspromises.readFile("./data.json", "utf8");
    const arr = JSON.parse(db);
    const len = arr.length;
    const newProduct = data;
    if (len == 0) {
        newProduct.id = 1;
    }
    else {
        newProduct.id = (arr[len - 1].id) + 1;
    }
    arr.push(newProduct);
    fs.promises.writeFile("./data.json", JSON.stringify(arr));
    res.json({
        status: 'success',
        result: 1,
        data: {
            newProduct: newProduct
        }
    });
}




const dltProduct = async (req, res) => {

    const reqId = parseInt(req.params.id);
    const arr = JSON.parse(await fspromises.readFile("./data.json", "utf8"));
    const newArr = arr.filter((elem) => {
        if (elem.id == reqId) return false;
        else return true;
    });
    fspromises.writeFile("./data.json", JSON.stringify(newArr));
    res.json({
        status: 'success',
        result: 1,
        data: {
            newProduct: null,
        }
    });
}

module.exports = { getAllProducts, addProduct , dltProduct}






