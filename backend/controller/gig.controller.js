
const Gig=require("../models/gig.model");
const createError=require("../middleware/createError");

exports.createGig=async(req,res)=>{

	if(!req.isSeller)return  next(createError(403,"Only seller can create gig"))
	const newGig=new Gig({
	userId:req.userId,
...req.body,


})
try{

	const saveGig=await newGig.save();
	res.status(201).json(saveGig);
}catch(err){
	next(err);


}}



exports.deleteGig=async(req,res)=>{


		try{
			const gig=await Gig.findById(req.params.id);

			if(gig.userId!==req.userId){
				return next(createError(403,"you can delete only gig"))


			}
			await gig.findByIdAndDelete(req.params.id);
			res.status(100).send("gig has deleted");

		}

		catch(err){
				next(err);
		}
}


exports.getGig=async(req,res)=>{

	try{

		const gig=findById(req.params.id);
		res.status(200).send(gig);
		if(!gig)return next(createError(404,"gig not found"))

	}catch(err){
		next(err);
	}

}



exports.getGigs=async(req,res)=>{
	const q=req.query;
	const filters={
		...(q.cat && {cat:q.cat}),
		...(q.min || q.max && {price:{ ...(q.min && {$gt:q.min}),...(q.max && {$gt:q.max})}}),

		...(q.search && {title:{$regex:q.search,$options:"i"}})

	}
		try{


			const gigs=await find(filters);
			res.status(200).send(gig);
		}
		catch(err){
			console.log(err);
		}

}
