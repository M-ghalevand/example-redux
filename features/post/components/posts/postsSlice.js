import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import jsonplaceholder from '../api/jsonplaceholder';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {

    const response = await jsonplaceholder.get('/posts')

    return response.data
})


const postAdapter = createEntityAdapter();
const initialState = postAdapter.getInitialState({
    status: 'idle',
})

export const { selectById: selectPostById, selectIds: selectPostIds } = postAdapter.getSelectors(state => state.posts)

const postsSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchPosts.fulfilled]: (state, action) => {
            postAdapter.upsertMany(state, action.payload)
            state.status = 'success'
        },
        [fetchPosts.rejected]: (state, action) => {
            state.status = "error"
            console.log(action.payload);
        }
    }
})
// export {} = usersSlice.actions
export default postsSlice.reducer