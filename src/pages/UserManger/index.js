import React from 'react'
import {NavBar , Icon, Modal,List,InputItem,Button,Flex} from 'antd-mobile'
import {connect} from 'dva'
import MyComponent from '../../utils/MyComponent'
function AddUser(props){
    console.log(props);
    let {uid,username,moneybase} = props.addUserValue;
    let {viewDataInput,sure} = props;
    return <List>
            <InputItem value={uid} 
            onChange={ev=>viewDataInput(ev,'uid')}>用户id</InputItem>
            <InputItem value={username} 
            onChange={ev=>viewDataInput(ev,'username')}>用户名</InputItem>
            <InputItem value={moneybase} 
            onChange={ev=>viewDataInput(ev,'moneybase')}>金钱基数</InputItem>
            <Button onClick={()=>sure()}>确定</Button>
            <Button>取消</Button>
        </List>
}

function EditUser(){
    return <div>
        编辑
    </div>
}
class UserManger extends MyComponent{
    state = {
        isVisible:false,
        addOrEdit:true,
        addUserValue:{
            uid:'qqw',
            username:'',
            moneybase:''
        }
        
    }
    sure(){
        let {uid,username,moneybase} = this.state.addUserValue;
        this.closeModal();
        this.props.addUser(uid,username,moneybase);
        
    }
    viewDataInput(writeVal,keyStr){
        console.log(this);
        let addUserValue = this.state.addUserValue;
        addUserValue[keyStr] = writeVal;
        this.setState({addUserValue});
    }
    delUser(){
        Modal.alert('警告','确认删除吗？',[{text:'确定'},{text:'取消'}])
    }
    componentDidMount(){
        window.um = this;
        this.props.initUserList();
    }
    closeModal(){
        this.setState({isVisible:false})
    }
    leftClick(){
        console.log(this.props.history);
        this.props.history.goBack();
    }
    render(){
        let {isVisible,addOrEdit,addUserValue} = this.state;
        let {push} = this.props.history;
        let {userList} = this.props;
        return <div>
            <NavBar
                mode="dark"
                leftContent="Back"
                onLeftClick={()=>this.leftClick()}
                rightContent={[
                    <Icon onClick={()=>this.setState({isVisible:true,addOrEdit:true})} key="0" type="cross-circle" style={{ marginRight: '16px',transform:'rotate(45deg)' }} />
                ]}
            >用户管理</NavBar>
            {/* 用户列表 */}
            <List>
                {
                    userList.map((item,key)=>{
                        return <List.Item key={key}>
                                <Flex>
                                    <Flex.Item onClick={()=>this.setState({isVisible:true,addOrEdit:false})}>编辑</Flex.Item>
                                    <Flex.Item>{item.uid}</Flex.Item>
                                    <Flex.Item>{item.username}</Flex.Item>
                                    <Flex.Item onClick={this.delUser}>删除</Flex.Item>
                                </Flex>
                            </List.Item>
                    })
                }
            </List>
            {/* 模态框 */}
            <Modal
             onClose={this.closeModal.bind(this)}
             visible={isVisible} 
             transparent={true} 
             >
                {
                    addOrEdit ? <AddUser 
                    addUserValue={addUserValue} 
                    viewDataInput={this.viewDataInput.bind(this)} 
                    sure={this.sure.bind(this)} 
                    /> : <EditUser />
                }
                
            </Modal>
        </div>
    }
}
let mapState = (state)=>{
    window.store = state;
    return {
        userList:state.usermanger.userList
    }
}
let mapDispatch = (dispatch)=>{
    return {
        initUserList(){
            dispatch({type:'usermanger/initUserListAsync'});
        },
        addUser(uid,username,moneybase){
            dispatch({type:'usermanger/addUserAsync',uid,username,moneybase});
        }
    }
    
}
UserManger = connect(mapState,mapDispatch)(UserManger);
export default UserManger;