const express=require('express');
// const mysql=require("mysql2")
const app=express();
const port=3000;
const dotenv=require("dotenv")
const db=require("./database/db")
const cookieParser=require('cookie-parser');


const userRoute=require("./routes/user.route")
const authRoute=require("./routes/auth.route");




dotenv.config();
app.use(express.json())

app.use(cookieParser());

app.get("/",(req,res)=>{
	res.send("hello it's working")
})

app.use("/api/auth",authRoute)
app.use("/api/user",userRoute);
// app.use("/api/gig",);
// app.use("/api/orders",);
// app.use("/api/conversation",);
// app.use("/api/messages",);
// app.use("/api/reviews",);


// app.use((err,req,res,next)=>{

// 	const errorStatus=err.status || 500;
// 	const errorMessage=err.message|| 'something wrong';

// 	return res.status(errorStatus).send("errorMessage");

// })

app.use((err,req,res,next)=>{

	const errorStatus=err.status|| 500;
	const errorMessage=err.message || message;
	return res.status(errorStatus).send(errorMessage);

}
)

app.listen(port,()=>{
	db();
	console.log(`server is running at ${port}`);
})