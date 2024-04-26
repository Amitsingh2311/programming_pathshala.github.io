const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({                    //schemaa creation
    ProductID:{ 
        type: String, 
        
    },
    UserID: {
        type:String,

    },
    UserName:{
        type:String,
        required:true
    },
    Description:String,
    Images:[String],
    Rating:{
        type:Number,
    },
    CreatedAt:{
        type:Date,
        default:new Date(),
    },
    updatedAt:{
        type:Date,
        default:new Date(),
    }
})


const reviewModel = mongoose.model('reviews', reviewSchema);          //model




module.exports = reviewModel;


















