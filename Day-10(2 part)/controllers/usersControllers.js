const userModel = require('../models/usersModel');

const getAllUser = async (req, res) => {               //for get
    const data = await userModel.find();
    console.log(data);

    res.json({
        status: 'success',
        ressult: 0,
        data: {
            products: data,
        }
    })
}


const addUser = async (req, res) => {                         //for push
    try {
        const { _id, ...data } = await userModel.create(req.body)
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


const replaceUser = async (req, res) => {
    try {
        const reqId = req.params.id;
        const data = { ...req.body, reqId };
        const result = await userModel.findOneAndReplace({ _id: reqId }, data);
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


const deleteUser = async (req, res) => {
    try {
        const reqId = req.params.id;
        const data = { ...req.body, reqId };
        const result = await userModel.findOneAndDelete({ _id: reqId }, data);
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
    getAllUser,
    addUser,
    replaceUser,
    deleteUser
}























