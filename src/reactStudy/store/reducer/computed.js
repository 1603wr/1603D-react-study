let oTypes = {
    'DIS'(state,action){
        state.num -= 1;
    }
}
let computed = (state={num:0},action)=>{
    oTypes[action.type] && oTypes[action.type](state,action);
    return {
        ...state
    }
    
}

export default computed