const mongoose=require("mongoose");
const express=require("express");

const orderSchema=new Schema({

	gigId:{
		type:String,
		required:true,
	},
	title:{
		type:String,
		required:true,
	},
	price:{
		type:Number,
		required:true,

	},
	sellerId:{
		type:String,
		required:true,
	},
	buyerId:{
		type:String,
		requried:true,

	},
	isCompleted:{
		type:String,
		required:true,
	},
		payment_intent:{
	type:String,
	required:true,

	}


})

module.exports=mongoose.model("Order",orderSchema);