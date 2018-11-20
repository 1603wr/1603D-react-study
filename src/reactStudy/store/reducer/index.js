
import todolist from './todolist'
import computed from './computed'
function combineReducer(option){
    return  (state={},action)=>{
        let obj = {};
        Object.keys(option).forEach(item=>{
            obj[item] = option[item](state[item],action);
        });
        return obj; 
    }
}

let reducer = combineReducer({
    computed,todolist
})


export default reducer;