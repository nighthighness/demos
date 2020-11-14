//引入express
const express=require('express');
const qs = require('qs');
//引入连接池模块
const pool=require('../pool.js');
//console.log(pool);
// const expressToken = require('express-token');
//创建路由器
const router=express.Router();
//添加路由
//1.用户注册 post /reg
//localhost:3000/user/reg
router.post('/reg',(req,res)=>{
  //1.1获取post请求的数据
  let obj=req.body; // req.query req.body
  console.log(obj);
  //1.2验证各项数据是否为空
  //如果用户名为空
  if(!obj.uname){
    res.send({code:401,msg:'uname required'});
	//阻止函数体往后执行
	return;
  }
  if(!obj.upwd){
    res.send({code:402,msg:'upwd required'});
	return;
  }
  if(!obj.email){
    res.send({code:403,msg:'email required'});
	return;
  }
  if(!obj.phone){
    res.send({code:404,msg:'phone required'});
	return;
  }
  //1.3执行SQL语句，将数据插入到数据库
  pool.query('INSERT INTO xz_user SET ?',[obj],(err,result)=>{
    if(err) throw err;
	console.log(result);
    //如果数据插入成功，响应成功的对象
    res.send({code:200,msg:'reg suc'});
  });
  
});

// token



//2.用户登陆 post /login
router.post('/login',(req,res)=>{
  //2.1获取post请求的数据
  let obj=req.body;
  console.log(obj);
  //2.2验证用户名和密码是否为空
  if(!obj.uname){
    res.send({code:401,msg:'uname required'});
	return;
  }
  if(!obj.upwd){
    res.send({code:402,msg:'upwd required'});
	return;
  }
  //2.3执行SQL语句，到数据库查询有没有用户名和密码同时匹配的数据
  pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=?',[obj.uname,obj.upwd],(err,result)=>{
    if(err) throw err;
	console.log(result);
	//result是数组，如果数组中有元素，说明登陆成功，否则空数组说明登陆失败
    if(result.length>0){
	  res.send({code:200,msg:result});
	}else{
	  res.send({code:301,msg:'login error'});
	}
  });
});
//3.修改用户 get /update
router.get('/update',(req,res)=>{
  //3.1获取查询字符串传递的数据
  let obj=req.query;
  console.log(obj);
  //3.2验证数据是否为空
  //查看每一个值是否为空，批量的验证
  let i=400;
  for(let key in obj){//遍历对象属性
    i++;
    //key属性名  obj[key] 属性值
    //console.log(key,obj[key]);
	//如果属性值为空，响应属性名是必须的
	if(!obj[key]){
	  res.send({code:i,msg:key+' required'});
	  return;
	}
  }
  //3.3执行SQL语句
  pool.query('UPDATE xz_user SET ? WHERE uid=?',[obj,obj.uid],(err,result)=>{
    if(err) throw err;
	console.log(result);
	//result 是一个对象
	//result下有一个属性affectedRows，如果大于0 说明修改成功，否则修改失败
    if(result.affectedRows>0){
	  res.send({code:200,msg:'update suc'});
	}else{
	  res.send({code:301,msg:'update err'});
	}
  });
  
});
//4.用户列表 get /list
router.get('/list',(req,res)=>{
  //4.1获取get传递的数据
  //查询字符串
  let obj=req.query;
  //4.2如果数据为空，设置默认值
  //页码为空，显示第1页
  if(!obj.pno) obj.pno=1;
  //每页大小为空，默认是2条件数据
  if(!obj.count) obj.count=2;
  // console.log(obj);
  //4.3计算start
  let start=(obj.pno-1)*obj.count;
  //4.4将每页大小转为数值型
  obj.count=parseInt(obj.count);
  //4.5执行SQL语句
  pool.query('SELECT uid,uname FROM xz_user LIMIT ?,?',[start,obj.count],(err,result)=>{
    if(err) throw err;
	console.log(result);
	//把查询到的数据响应到浏览器
	res.send({code:200, msg:result[0]});
  });
  
});

 //5.get/delete
  router.get('/delete',(req,res)=>{
    let obj = req.query;

    pool.query('select * from xz_user WHERE uid = ?',[obj.uid],(err,result)=>{
      if(err) throw err;
        // console.log(result);

      if(result.length > 0){
         pool.query('delete from xz_user WHERE uid = ?',[obj.uid],(err,result)=>{
          if(err) throw err;
          res.send({code:200,msg:`删除成功`})
        })
      }else{
        res.send({code:301,msg:`您所删除的用户不存在`})
      }
    })
  });

  //6. get/details
  router.post('/details',(req,res)=>{
    let obj = req.body;
    // console.log(obj)
    if(!obj.uname){
      res.send({code:401,msg:`用户不能为空`})
      return;
    }

    pool.query('select * from xz_user WHERE uname = ?',[obj.uname],(err,result)=>{
      if(err) throw err;
      if(result.length > 0){
        res.send({code:200,msg:result})
      }else{
        res.send({code:301,msg:`未检索到用户`})
      }
    })

  })

  //7. userAll
  router.get('/all', (req,res)=>{
    pool.query('select * from xz_user',(err,result)=>{
      if(err) throw err;

      if(result.length>0){
        res.send(result)
      }else{
        res.send('error ...')
      }
    })
  })

  //8. insert user-cart
  router.post('/usercart',(req,res)=>{
    var data = qs.parse(req.body).cartList
    console.log(data)
    for(var i in data){
      pool.query('insert into xz_shoppingcart_item(user_id,product_id,count,price,title)values (?,?,?,?,?)',[data[i].uid,data[i].pid,data[i].count,data[i].price,data[i].title],(err,result)=>{
        if(err) throw err;
      })
    }
    res.send({code:'200',msg:'可进行结算'})
  })

  //9. get cart-list
  router.post('/cartlist',(req,res)=>{
    let userid = req.body.uid

  pool.query('select * from xz_shoppingcart_item where user_id = ?',[userid],(err,result)=>{
    if(err) throw err;

    console.log('cartlist',result)
    res.send(result)
  })
})
//导出路由器对象
module.exports=router;







