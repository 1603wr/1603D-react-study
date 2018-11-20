import React , {Component} from 'react'
import Immutable,{fromJS} from 'immutable'
window.im = Immutable;
export default class MyComponent extends Component{
    shouldComponentUpdate(nextProps,nextState){
        let preProps = this.props;
        let preState = this.state;
        let prop = false;
        let state = false;
        if(fromJS(nextProps).equals(fromJS(preProps))){
            prop = true;
        }
        if(nextState === null){
            state = true;
        }else{
            if(fromJS(nextState).equals(fromJS(preState))){
                state = true;
            }
        }
        
        if(prop && state){
            return false;
        }else{
            return true;
        }

    }
}