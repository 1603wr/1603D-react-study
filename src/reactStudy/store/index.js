import {createStore} from 'redux'

import reducer from './reducer'



const store = createStore(reducer);

window.store = store;
/** 
 * getState
 * dispatch
 * subscribe 注册一个函数，该函数在dispatch执行的时候触发
 * 
*/
export default store;