var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var healthSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    Age: {
        type: String,
    },
    Height: {
        type: String,
       
    },
    Mass: {
        type: String,
       
    },
})



module.exports = mongoose.model('HealthMass', healthSchema)