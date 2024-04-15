import { request } from "@/utils";

const { createSlice } = require("@reduxjs/toolkit");

const userStore = createSlice(
    {
        name: 'user',
        initialState: {
            token: ''
        },
        reducers: {
            setToken(state, action) {
                state.token = action.token
            }
        }
    }
)

const { setToken } = userStore.actions
const userReducer = userStore.reducer

const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        const res = await request.post('/v1_0/authorizations')
        dispatch(setToken(res.data.token))
    }
}


export { setToken, fetchLogin }
export default userReducer