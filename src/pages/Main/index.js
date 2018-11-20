import React from 'react'
import {Route , Switch } from 'dva/router'
import {NavBar,TabBar,Icon} from 'antd-mobile'
import Home from '../Home'
import Detail from '../Detail'
import Submit from '../Submit'
import Computed from '../Computed'
const tabbars = {
    '/main/home':'首页',
    '/main/detail':'详情',
    '/main/submit':'提交',
    '/main/computed':'结算'
}
let tabbarsButton = [
    {text:'首页',path:'/main/home'},
    {text:'详情',path:'/main/detail'},
    {text:'提交',path:'/main/submit'},
    {text:'结算',path:'/main/computed'}
]
let tabBarItem = {
    width: '22px',
    height: '22px',
    background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }
let selectIcon = {
    width: '22px',
    height: '22px',
    background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }
class Main extends React.Component{
    state = {
        title:'首页',
        selectIndex:0
    }
    onPress(selectIndex){
        this.setState({selectIndex});
        this.props.history.push(tabbarsButton[selectIndex].path);
    }
    render(){
        let {match} = this.props;
        let {push} = this.props.history;
        let {title,selectIndex} = this.state;
        window.h = this.props.history;
        return <div style={{height:'90vh'}}>
            <NavBar icon={<Icon type="ellipsis" onClick={()=>push('/usermanger')} />}>{title}</NavBar>
            <Switch>
                <Route path={match.path+'/home'} component={Home} />
                <Route path={match.path+'/detail'} component={Detail} />
                <Route path={match.path+'/submit'} component={Submit} />
                <Route path={match.path+'/computed'} component={Computed} />
            </Switch>
            <TabBar
                tabBarPosition={'bottom'}
            >
                {
                    tabbarsButton.map((item,key)=>{
                        return <TabBar.Item
                                selected={key === selectIndex}
                                onPress={()=>this.onPress(key)}
                                title={item.text}
                                key={key}
                                selectedIcon={<div style={selectIcon}></div>}
                                icon={<div style={tabBarItem}></div>} />
                    })
                }
                
                
            
            </TabBar>
        </div>
    }
    componentDidMount(){
        this.unlisten = this.props.history.listen((match)=>{
            console.log(this);
            
            let title = tabbars[match.pathname];
            this.setState({title});
        });
    }
    componentWillUnmount(){
        this.unlisten();
    }
}
export default Main;