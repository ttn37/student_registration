var express = require("express");
var async = require("async");
var router  = express.Router();
var passport = require("passport");
var db = require("../db.js");
var bcrypt = require('bcrypt');
var saltRounds = 10;
var middleware = require("../middleware");

router.get("/analysis8",middleware.isLoggedInAdmin,function(req,res){
    // db.query("SELECT s.stdID , s.department , max(t.grade) as maxG FROM student s ,  (SELECT stdID , avg(grade) as grade FROM enrollment GROUP BY stdID) t WHERE s.stdID = t.stdID GROUP BY s.department ",function(err,results){
    //     if(err) throw err;
    //     var an = [];
    //     for(var i=0;i<results.length;i++){
    //         const temp = {
    //             stdid: results[i].stdID,
    //             dept: results[i].department,
    //             maxg: results[i].maxG
    //         }
    //         an.push(temp);
    //     }
    //     var plotJSON = JSON.stringify(an);
    //     res.render("analysis8",{plot:an,plotJSON:plotJSON});
    // });
    const question = ["question1","question2","question3","question4"];
    const one = ["test1","dos","work","yes"];
    const two = ["test2","dos","work","yes"];
    const three = ["test3","dos","work","yes"];
    const four = ["test4","dos","work","yes"];
    const answer = [1,1,1,1];
    res.render("analysis8",{question:question,answer:answer,one:one,two:two,three:three,four:four});
});


module.exports = router;