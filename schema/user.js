var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var moment = require("moment");

var userSchema = new Schema({
    index: {type: Number, default: 0},
    name: {type: String, default: ""},
    age: {type: Number},
    createdAt:{type:Date, default:Date.now()},
    remark:{type:String,default:""}
});

var formatCreatedAt = userSchema.virtual('formatCreatedAt');
formatCreatedAt.get(function () {
  return new moment(this.createdAt).format("YYYY-MM-DD HH:mm:ss:SSS");
});

userSchema.pre('save',function(next){
  this.createdAt = Date.now();
  next();
});


module.exports = userSchema;