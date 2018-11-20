import React , {Component} from 'react'
import {connect} from 'dva'
import {Route , Switch} from 'dva/router'
import PerForms from './performs'
class Test extends Component{
    render(){
        let {title,setNewTitle} = this.props;
        return <div onClick={()=>setNewTitle()}>{title}

            <Switch>
                <Route path="/test/performs" component={PerForms} />
            </Switch>

        </div>
    }
}
let mapState = (state)=>{
    return {
        title:state.test.title
    }
}
let mapDispatch = (dispatch)=>{
    return {
        setNewTitle(){
            dispatch({type:'test/setNewTitle',newTitle:'hello new title'});
        }
    }
}
Test = connect(mapState,mapDispatch)(Test);
export default Test;