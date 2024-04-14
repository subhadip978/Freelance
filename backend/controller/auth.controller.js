
const User=require("../models/user.model");
const {createError}=require("../utils/createError");

const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

exports.register= async(req,res,next)=>{

	try{
		const hash=bcrypt.hashSync(req.body.password,5)
		const newUser=new User({
			...req.body,
			password:hash,
		});
		await newUser.save();
		res.status(201).send("user has been created")

	}
	catch(err){
		// res.status(500).send("something wrong")
		next(err);
	}

}


exports.login=async(req,res,next)=>{
	try{
	const user=await User.findOne({username:req.body.username})

	
	const err=new Error;
	err.status=404;
	err.message="User not exist"
	if(!user){
		// return res.status(401).send("User is not found");
		return next(createError(404,"User is not exist!"));
	}

	const isCorrect=bcrypt.compareSync(req.body.password,user.password);
	if(!isCorrect){
		return res.status(400).send("wrong passowrd or username")
	}
	
	const token=jwt.sign({
		id:user._id,
		isSeller:user.isSeller,
	},process.env.JWT_KEY)  

	const {password,...info}=user._doc ;

	res.cookie("accessToken",token,{
		httpOnly:true,
	}).status(200).send(info) ;

}
catch(err){
	// res.status(500).send("something went wrong"+err)
	next(err);
}
}
  

exports.logout=(req,res)=>{


			res.clearCookie("accessToken",{

				sameSite:"none",
				secure:true,
			})
			.status(200)
			.send("user has been log out")


			
}