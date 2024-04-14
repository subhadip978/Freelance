
const Gig=require("../models/gig.model");
exports.createOrder=async(req,res)=>{
		try{

			const gig=Gig.findById(req.params.id)

			const newOrder=new Order({
				gigId:gig._id ,
				img:gig.cover,
				title:gig.title,
				buyerId:req.userId,
				sellerId:gig.userId,
				payment_intent:"temporary"



			})

			await newOrder.save();
		}
		catch(err){
			next(err);

		}

}

exports.getOrders=(req,res)=>{

	try{


	}
	catch(err){
		next(err);

	}
}