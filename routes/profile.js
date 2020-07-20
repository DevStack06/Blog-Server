const express = require("express");
const router = express.Router();
const Profile=require("../models/profile.model");
const middleware= require("../middleware");

router.route("/add").post(middleware.checkToken,(req,res)=>{
const profile = Profile({
    username:req.decoded.username,
    name:req.body.name,
      profession:req.body.profession,
      DOB:req.body.DOB,
      titleline:req.body.titleline,
      about:req.body.about,
});
profile.save()
.then(()=>
{
    return res.json({msg:"profile successfully stored"});
})
.catch((err)=>{
    return res.status(400).json({err:err});
});
});

module.exports = router;