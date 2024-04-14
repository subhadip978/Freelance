 const jwt=require("jsonwebtoken");
const {createError}=require("../utils/createError");

exports.verifyToken=(req,res,next)=>{
	// const reqId=req.params.id;

	try{	
	const token=req.cookies.accessToken;
	
	if(!token){
		//return res.status(401).send("you are not authenticated")
		return next(401,"You are not authenticated")

	}
	jwt.verify(token,process.env.JWT_KEY,async(err,payload)=>{
		if(err){
			//return res.status(403).send("token is not valid")
			return 	next(createError(403,"token is not valid"))
		}

		req.userId=payload.id ;
		req.isSeller=payload.isSeller;
		console.log(req.userId);
		// res.send(payload);
		next()
		


	})
}catch(err){
	console.log(err);
}

}