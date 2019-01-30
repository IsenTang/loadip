var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var cacheSchema = new Schema({
    context:{type:Object,default:{}}
});  




module.exports = cacheSchema;