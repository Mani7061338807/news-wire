const mongoose = require('mongoose');

const newSchema = mongoose.Schema({
    title:String,
    body:String,
    author:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('news',newSchema);