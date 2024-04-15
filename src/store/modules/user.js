import { http } from "@/utils";
import { setToken as _setToken, getToken } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

const userStore = createSlice(
    {
        name: 'user',
        // 数据状态
        initialState: {
            token: getToken() || '',
            userInfo: {}
        },
        // 同步修改方法
        reducers: {
            setToken(state, action) {
                state.token = action.payload
                _setToken(action.payload)
            },
            setUserInfo(state, action) {
                state.userInfo = action.payload
            }
        }
    }
)

const { setToken, setUserInfo } = userStore.actions
const userReducer = userStore.reducer

const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        // 发布异步请求
        const res = await http.post('/authorizations', loginForm)
        // 提交同步action进行token的存入
        dispatch(setToken(res.data.token))
    }
}

const fetchUserInfo = () => {
    return async (dispatch) => {
        const res = await http.get('/user/profile')
        dispatch(setUserInfo(res.data))
    }
}



export { setToken, fetchUserInfo, fetchLogin }
export default userReducer