import store from '../reactStudy/store'
import React from 'react'
import MyComponent from './MyComponent.jsx'
function connect(mapState,mapDispatch){
    return View=>{
        return class extends MyComponent{
            constructor(props){
                super(props);
                store.subscribe(()=>{
                    this.setState({
                        mapState:mapState(store.getState(),this.props),
                        mapDispatch:mapDispatch(store.dispatch)
                    });
                })
            }
            state={
                mapState:mapState(store.getState(),this.props),
                mapDispatch:mapDispatch(store.dispatch)
            }
            render(){
                let {mapState,mapDispatch} = this.state;
                let props = {...mapState,...mapDispatch,...this.props};
                return <View {...props} />
            }
        }
    }
}

export default connect;