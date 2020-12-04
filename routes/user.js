const express = require("express");
const User = require("../models/users.model");
const config = require("../config");
const bcrypt=require('../helper/bcrypt')
const jwt = require("jsonwebtoken");
let middleware = require("../middleware/middleware");
let {checkemail,checkusername}=require('../middleware/auth');
const router = express.Router();

router.route("/:username").get(middleware.checkToken, (req, res) => {
  User.findOne({ username: req.params.username }, (err, result) => {
    if (err) return res.status(500).json({ msg: err });
    return res.json({
      data: result,
      username: req.params.username,
    });
  });
});

router.route("/checkusername/:username").get((req, res) => {
  User.findOne({ username: req.params.username }, (err, result) => {
    if (err) return res.status(500).json({ msg: err });
    if (result !== null) {
      return res.json({
        Status: true,
      });
    } else
      return res.json({
        Status: false,
      });
  });
});

router.route("/login").post(async (req, res) => {
  const username=req.body.username;
  const password=req.body.password;
  await User.findOne({username:username}).then(async(data)=>{
      
      const match=await bcrypt.Compare(password,data.password);
      if(match)
      {
          jwt.sign({username:username},config.key,function(err,token)
          {
              if(err) 
              {
                throw(err);
              }
              res.json({
                  success:true,
                  token: token,
                  msg: "success",
                });
          });
      }
      else {
          res.status(403).json({success:false,msg:"password is incorrect"});
        }

  });
});

router.route("/register").post([checkusername,checkemail],async (req, res) => {
  try{
    const username=req.body.username;
    const email=req.body.email;
    const password=req.body.password;
     await bcrypt.Hash(password).then((hash)=>{
      User.create({username:username,password:hash,email:email}).then((data)=>{
        
        return res.status(200).json([{success:true,msg:'user created successfully',data:data}])
       }).catch((err)=> 
       {
         return res.status(403).json([{success:false,msg:'Sorry Your registration is not successFull',err:err}]).catch((err)=>console.log(err) );
       });
      });
  
            
}
catch(err)
{
    return res.status(500).json(err);
}
});

router.route("/update/:username").patch(middleware.checkToken, async (req, res) => {
  try{
    const old_password=req.body.old_password;
    const new_password=req.body.new_password;
    const username=req.params.username;
    
     await User.findOne({username:username}).then(async (data)=>{
              
               const match=await bcrypt.Compare(old_password,data.password);
               if(match)
               {
                const hash= await bcrypt.Hash(new_password);
                await User.updateOne({username:username},{$set:{password:hash}}).then((data)=>{
                    res.status(200).json([{success:true,msg:'User password updated Successful'}])
                 }).catch((err)=>console.log(err))
               }
              
              return res.status(403).json([{success:false,msg:'Sorry password Doesnot Match ..Please try again later'}])
              
              
     });
}
catch(err)
{
    return res.status(500).json(err);
}
});

router.route("/delete/:username").delete(middleware.checkToken, (req, res) => {
  User.findOneAndDelete({ username: req.params.username }, (err, result) => {
    if (err) return res.status(500).json({ msg: err });
    const msg = {
      msg: "User deleted",
      username: req.params.username,
    };
    return res.json(msg);
  });
});

module.exports = router;
