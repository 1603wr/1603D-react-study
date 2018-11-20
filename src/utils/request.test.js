import request from './request'

request('/test',{
    method:'GET',
    params:{
        uid:123
    }
}).then(data=>{
    // console.log(data);
})

request('/test',{
    method:'POST',
    body:{
        uid:3454
    }
}).then(
    // data=>console.log(data)
    );