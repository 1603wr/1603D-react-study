import {initUserListApi} from '../services/usermanger'
export default {
    namespace:'usermanger',
    state:{
        userList:[]
    },
    effects:{
        *initUserListAsync(action,{call,put}){
            let userList = yield call(initUserListApi);
            userList = userList.userList;
            yield put({type:'initUserList',userList});
        },
        *addUserAsync({uid,username,moneybase},{call,put}){
            // 发请求给后端
            yield put({type:'addUser',uid,username,moneybase});  
        }
    },
    reducers:{
        initUserList(state,action){
            return {
                ...state,
                userList:action.userList
            }
        },
        addUser(state,{uid,username,moneybase}){
            state.userList.push({uid,username,moneybase});
            let userList = [...state.userList];
            return {
                ...state,
                userList
            }
        }
    }
}