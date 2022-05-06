var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var healthSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    percent: {
        type: Number,
    },
    day: {
        type: String,
       
    },
})



module.exports = mongoose.model('Health', healthSchema)