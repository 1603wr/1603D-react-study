const express = require('express')
const router = express.Router();
const querystring = require('querystring');
router.use((req,res,next)=>{
    let html = '';
    req.on('data',chuck=>{
        html += chuck;
    });
    req.on('end',()=>{
        req.body = querystring.parse(html);
        next();
    })
})
router.get('/test',(req,res,next)=>{
    res.send({msg:'test get'})
})
router.post('/test',(req,res,next)=>{
    res.send({msg:'test post'})
})

// 初始化用户列表
let userList = [
    {uid:'zhangsan',username:'张三',moneybase:0}
]
router.get('/initUserList',(req,res,next)=>{
    res.send({msg:'获取数据成功',code:1,userList});
});
// 添加用户
router.post('/addUserList',(req,res,next)=>{
    let {uid,username,moneybase} = req.body;
    userList.push({uid,username,moneybase});
    res.send({msg:'添加成功',code:1});
});
// 删除用户
router.post('/delUser',(req,res,next)=>{
    let {uid} = req.body;
    let index = userList.findIndex(item=>item.uid === uid);
    userList.splice(index,1);
    res.send({msg:'删除成功',code:1});
})
// 修改用户
router.post('/editUser',(req,res,next)=>{
    let {uid,username} = req.body;
    userList.find(item=>item.uid === uid).username = username;
    res.send({msg:'修改成功',code:1});
})


module.exports = router;