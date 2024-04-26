const productModel = require('../models/productsModel');

const getAllProducts = async (req, res) => {

    const { sort='price', page = 1, pageSize = 3,field ='-info', ...q } = req.query;       //diffrentiate the content
    console.log(q, sort);                                                                   //for get
    let query = productModel.find(q);

    const sortStr = sort.split(',').join(' ');
    query = query.sort(sortStr);                            //for sorting

    // const skip = 0;
    // const limit = 3;
    const skip = pageSize*(page-1);                         //pagination
    query.skip(skip).limit(pageSize);
    console.log(query);

    query = query.select('title');                          //specific content select(in code)
    // query = query.select('-title');                         //neglect this part
    
    const fieldStr = sort.split(',').join(' ');              //specific content select(from user) 
    query = query.select(fieldStr);                     

    const data = await query;                                 //send data to database

    console.log(data);
    console.log(req.url);

    // const q = req.query;       
    // console.log(q);                                       //for get function
    // const data = await productModel.find(q);
    // console.log(data);


    const totalResults = await productModel.countDocuments()          //it is for count the overall document
    res.json({
        status: 'success',
        result: data.length,
        data: {
            products: data
        },
        totalResult: totalResults,
        psgeSize:pageSize,
        page:page,
    })
}


const addProduct = async (req, res) => {                         //for push
    try {
        const { _id, ...data } = await productModel.create(req.body)
        console.log(data);
        res.json({
            status: 'success',
            result: 1,
            data: {
                product: data,
            }
        });
    }
    catch (err) {
        console.log(err);
        res.json({
            status: 'fail',
            message: JSON.stringify(err),
        });
    }
}


const replaceProduct = async (req, res) => {
    try {
        const reqId = req.params.id;
        const data = { ...req.body, reqId };
        const result = await productModel.findOneAndReplace({ _id: reqId }, data);
        console.log(data);
        res.json({
            status: 'success',
            result: 1,
            data: {
                product: result,
            }
        });
    }
    catch (err) {
        res.status(500);
        res.json({
            status: 'fail',
            message: JSON.stringify(err),
        });
    }

}


const deleteProduct = async (req, res) => {
    try {
        const reqId = req.params.id;
        const data = { ...req.body, reqId };
        const result = await productModel.findOneAndDelete({ _id: reqId }, data);
        console.log(data);
        res.json({
            status: 'success',
            result: 1,
            data: {
                product: result,
            }
        });
    }
    catch (err) {
        res.status(500);
        res.json({
            status: 'fail',
            message: JSON.stringify(err),
        });

    }
}


module.exports = {
    getAllProducts,
    addProduct,
    replaceProduct,
    deleteProduct
}























