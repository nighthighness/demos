const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
// const expressToken = require('express-token');


const userRouter = require('./routes/user.js');

app.listen(4000);
console.log('4000 listening');

app.use(cors());

app.use(express.static('./uploads'))


// app.use(expressToken(options));
// 指定上传文件夹地址
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // 接收到文件后输出的保存路径（若不存在则需要创建）
        cb(null, 'uploads');    
    },
    filename: function (req, file, cb) {
        // 将保存文件名设置为 时间戳 + 文件原始名，比如 151342376785-123.jpg
        cb(null, Date.now() + "-" + file.originalname);  
    }
});

//创建文件夹
var createFileDirectory = function(path) {
        try {
            //检测文件夹是否存在，不存在抛出错误
            fs.accessSync(path);
        } catch (error) {
            //创建文件夹
            fs.mkdirSync(path);
        }
    }

var upload = multer({storage:storage})

// upload.single 函数 内 为 input name 值 
app.post('/img_upload', upload.single('file') , function(req,res){
	let obj = req.file;
	console.log(obj);
	
	res.send(`上传成功:上传图片路径为：${obj.path}`);
})

app.use('/user',userRouter)