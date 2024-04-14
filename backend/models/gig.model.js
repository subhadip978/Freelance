const mongoose=require("mongoose");
const express=require("express");

const gigSchema=new Schema({


		userId:{
			type:String,
			required:true,
		},
		title:{
			type:String,
			required:true,
		},

		description:{
			type:String,
			required,
		},
		price:{
			type:number,
			required:true,
		},

		totalStars:{
			type:number,
			required:0,

		},

		startNumber:{
			type:Number,
			required:0,
		},
		cat:{
			type:String,
			required,
		},
		img:{
			type:[String],
			required:true,
		},
		deliveryTime:{
			type:Number,
			required:false,

		},
		features:{
			type:[String],
			required:false,
		}


},{
	timestamp:true
})


module.exports=mongoose.model("Gigs",gigSchema)