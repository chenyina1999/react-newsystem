import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../home/Home';
import UserList from '../user-manage/UserList';
import RightList from '../right-manage/RightList';
import RoleList from '../right-manage/RoleList';
import NoPermission from '../nopermission/NoPermission';

import { Spin } from 'antd';
import { connect } from 'react-redux';

function ContentRouter(props) {
    console.log('props', props.isLoading);
    return (
        <Spin size="large" spinning={props.isLoading}>
            <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/user-manage/UserList" element={<UserList />}></Route>
                <Route path="/right-manage/RoleList" element={<RoleList />}></Route>
                <Route path="/right-manage/RightList" element={<RightList />}></Route>
                <Route path="/right-manage/RightList" element={<RightList />}></Route>

                <Route path="/" element={<Navigate to="/home" />} exact />
                <Route path="*" element={<NoPermission />}></Route>
            </Routes>
        </Spin>
    )
}

// 传递给connect 的第一个参数，
// mapStateToProps 用于从store中选择出连接组件需要的那部分数据。它经常被简称为mapState 
// 1、每次store state 变更都会被调用它 2、它接收整个store state，并应返回组件所需的数据对象。
const mapStateToProps = (state) => {
    console.log('state', state );
    const { isLoading } = state.loading;
    return {
        isLoading
    }

}
// dispatch actions 给store
// const mapDispatchToProps = {
//     // ... 通常是一个充满 action creators 的 object
//     changeLoading() {
//         return {
//             type: "change_isLoading"
//         }
//     }
// };

// `connect` 返回一个接收要包装的组件的新函数：
// const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// 并且该函数返回连接的，包装的组件：
// const ConnectedComponent = connectToStore(Component);

// 通常我们会将两者一步完成，像这样：
export default connect(mapStateToProps)(ContentRouter);


