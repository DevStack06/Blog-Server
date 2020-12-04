const User = require("../models/users.model");
module.exports={
    checkusername:async function(req,res,next){
        const username=req.body.username;
        const user= await User.findOne({username:username});
    if(user != null)
     {
        return res.status(422).json({Status:false,errorName:"username"})
        
     }
    
          
         next();
     
    },
    checkemail:async function(req,res,next)
    {
        const email=req.body.email;
        const checkEmail=await User.findOne({email:email});
        if(checkEmail != null)
        {
          
           return res.status(422).json({Status:false,errorName:"email"})
          
        }
       
            next();
        
    }
}