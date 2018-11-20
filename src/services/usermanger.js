import request from '../utils/request'

export function initUserListApi(){
    return request('/initUserList');
}