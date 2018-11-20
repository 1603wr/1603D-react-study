export default {
    namespace:'test',
    state:{
        title:'hello title'
    },
    reducers:{
        setNewTitle(state,action){
            return {
                ...state,
                title:action.newTitle
            }
        }
    },
    effects:{
        
    }
}