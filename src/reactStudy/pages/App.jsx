import React from 'react'
import MyComponent from '../../utils/MyComponent'
import connect from '../../utils/connect'



class App extends MyComponent{
    render(){
        let {num} = this.props;
        return <div>app
            <div>
                <span>{num}</span>
                <span onClick={()=>this.props.dis()}>-</span>
            </div>
        </div>
    }
}
let mapState = (state,parentProps)=>{
    return {
        num:state.computed.num
    }
}
let mapDispatch = (dispatch)=>{
    return {
        dis(){
            dispatch({type:'DIS'});
        }
    }
}
App = connect(mapState,mapDispatch)(App);
export default App;