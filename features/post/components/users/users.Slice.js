import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import jsonplaceholder from '../api/jsonplaceholder';

export const fetchusers = createAsyncThunk('users/fetchusers', async () => {

    const response = await jsonplaceholder.get('/users')

    return response.data
})

const userAdapter = createEntityAdapter();
const initialState = userAdapter.getInitialState({
    status: 'idle',
})
export const { selectById: selectUsersById, selectIds: selectUsersIds } = userAdapter.getSelectors(state => state.users)


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchusers.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchusers.fulfilled]: (state, action) => {
            userAdapter.upsertMany(state, action.payload)
            state.status = 'idle'
        },
        [fetchusers.rejected]: (state, action) => {
            state.status = "error"
            console.log(action.payload);
        }
    }
})
// export {} = usersSlice.actions
export default usersSlice.reducer