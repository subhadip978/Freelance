const mongoose=require("mongoose");

const express=require("express");

const reviewSchema=new Schema({
userId:{
	type:String,
	required,
},
desc:{
	type:String,
	required,
},
star:{
	type:Number,
	required,
},

},
{
	timestamp:true,
})

module.exports=mongoose.model("Review",reviewSchema);