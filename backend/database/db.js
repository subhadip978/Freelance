// const mysql=require("mysql2");

// const pool=mysql.createPool({

// 	host:"localhost",
// 	user:"root",
// 	password:"Ineed$10lpa",
// 	database:"freelance",
// 	connectionLimit:10
// })

// pool.getConnection((err,connection)=>{


// 	if(err){
// 		console.log(err)
// 	}

// 	else{
// 		console.log("database is connected");
// 		connection.release();
// 	}
// })

// module.exports=pool;

const mongoose=require("mongoose");

const connectDB=async()=>{

	try{
	
		await mongoose.connect("mongodb+srv://subhadipdas175:das321@cluster1.zsyeahk.mongodb.net/");
		console.log("mongodb connected")
	}
	catch(err){
		console.log("mongodb connection failed :",err);
		process.exit(1);
	}
}

module.exports=connectDB ;