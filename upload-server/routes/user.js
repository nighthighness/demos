const express = require('express');
const pool = require('./../pool.js');

const router = express.Router();

router.get('/search',(req,res)=>{
	console.log(req.query);
	let user = req.query;

	pool.query('select * from user where uid = ?',[user.uid],(err,result)=>{
		if(err) throw err;
		console.log(result);

		res.end();
	})

})




module.exports = router;