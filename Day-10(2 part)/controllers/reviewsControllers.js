const reviewModel = require('../models/reviewsModels')


const getAllreview = async (req, res) =>  {
    try {
        const reqRating = req.params.rating;
        const data = { ...req.body, RatingId };
        const result = await productModel.find({ _id: reqRating }, data);
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


const addreview = async (req, res) => {                         //for push
    try {
        const { _id, ...data } = await reviewModel.create(req.body)
        console.log(data);
        res.json({
            status: 'success',
            result: data.length,
            data: {
                review: data,
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


const replacereview = async (req, res) => {
    try {
        const reqId = req.params.id;
        const data = { ...req.body, reqId };
        const result = await reviewModel.findOneAndReplace({ _id: reqId }, data);
        console.log(data);
        res.json({
            status: 'success',
            result: data.length,
            data: {
                review: result,
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


const deletereview = async (req, res) => {
    try {
        const reqId = req.params.id;
        const data = { ...req.body, reqId };
        const result = await reviewModel.findOneAndDelete({ _id: reqId }, data);
        console.log(data);
        res.json({
            status: 'success',
            result: data.length,
            data: {
                review: result,
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
    getAllreview,
    addreview,
    replacereview,
    deletereview
}

