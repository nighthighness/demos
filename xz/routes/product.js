//引入express
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//console.log(pool);
//创建路由器
const router=express.Router();

router.get('/list',(req,res)=>{
	pool.query('select * from xz_index_product',(err,result)=>{
		if(err) throw err;

		// console.log(result, typeof result)
		res.send(result)
	})
})



router.get('/proinfo',(req,res)=>{
	let pid = req.query.pid;
	// console.log(req.query)
	pool.query('select * from xz_index_product where pid = ?',[pid],(err,result)=>{
		if(err) throw err;
		res.send(result)
	})
})

router.get('/pages',(req,res)=>{
  //4.1获取get传递的数据
  //查询字符串
  let obj=req.query;
  //4.2如果数据为空，设置默认值
  //页码为空，显示第1页
  if(!obj.pno && !obj.count){
  	pool.query('select * from xz_laptop',(err,result)=>{
  		if(err) throw err;
  		res.send({code:200, msg:result})
  	})
  }else{
	  //4.3计算start
	  let start=(obj.pno-1)*obj.count;
	  //4.4将每页大小转为数值型
	  obj.count=parseInt(obj.count);
	  //4.5执行SQL语句
	  pool.query('SELECT * FROM xz_laptop LIMIT ?,?',[start,obj.count],(err,result)=>{
	    if(err) throw err;
		console.log(result);
		//把查询到的数据响应到浏览器
		res.send({code:200, msg:result});
	  })
 } 
  
})

module.exports = router