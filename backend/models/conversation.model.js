const mongoose=require("mongoose");



const conversationSchema=new Schema({

	id:{
		type:String,
		required:true,
		unique:true,
	},
	sellerId:{
		type:String,
		required:true,
	},
	buyerId:{

		type:String,
		required:true,
	},
	readBuyer:{
		type:String,
		required:true,
	},
	readSeller:{
		type:String,
		required:true,
	},

})

module.exports=mongoose.model("Conversation",conversationSchema);