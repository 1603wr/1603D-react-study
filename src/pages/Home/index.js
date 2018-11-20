import React from 'react'
import {connect} from 'dva'
class Home extends React.Component{
    render(){
        let {userList} = this.props;
        return <div>
            {
                userList.map((item,key)=>{
                    return <div key={key}>
                        {item.username}
                    </div>
                })
            }
        </div>
    }
    componentDidMount(){
        this.props.initUserList();
    }
}
let mapState = (state)=>{
    console.log(state);
    return {
        userList:state.usermanger.userList
    }
}
let mapDispatch = (dispatch)=>{
    return {
        initUserList(){
            dispatch({type:'usermanger/initUserListAsync'});
        }
    }
}
Home = connect(mapState,mapDispatch)(Home);
export default Home;