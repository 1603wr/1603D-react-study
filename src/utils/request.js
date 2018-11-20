import fetch from 'dva/fetch'
import qs from 'qs'
const request = (url,option = {method:'GET'})=>{
    if(option.method === 'GET'){
        let queryStr = qs.stringify(option.params);
        if(queryStr){
            url = url + '?' + queryStr;
        }
    }

    if(option.method === 'POST'){
        let bodyStr = qs.stringify(option.body);
        if(bodyStr){
            option.body = bodyStr;
        }
    }
    return fetch(url,option).then(res=>{
        return res.json();
    }).catch(err=>{
        alert('err');
    })

}
export default request