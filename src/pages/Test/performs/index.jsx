import React , {Component,PureComponent} from 'react'

import MyComponent from '../../../utils/MyComponent'
class PerForms extends MyComponent{
    static defaultProps = {

    }
    state = {
        msg:'performs',
        person:{
            name:'zhangsan'
        }
    }
    
    componentWillUpdate(){
        console.log('update');
    }
    render(){
        window.per = this;
        let {msg,person:{name}} = this.state;
        return <div>{msg}
            <h1>{name}</h1>
        </div>
    }
}
export default PerForms;