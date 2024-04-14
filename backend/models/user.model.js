const mongoose=require("mongoose");
const express=require("express");
const Schema=mongoose.Schema;
const userSchema=new Schema({


	username:{
		type:String,
		required:true,

	},
	email:{
			type:String,
			required:true,
			unique:true,

	},

	password:{
			type:String,
			required:true,
			unique:true,

	},

	description:{
		type:String,
		required:false,


	},
	img:{
		type:String,
		required:false,

	},
	isSeller:{
		type:Boolean,
		default:false,
	},


},

{
	timestamp:true
})


module.exports=mongoose.model("User",userSchema)