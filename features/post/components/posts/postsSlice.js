import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';

import jsonplaceholder from '../../../../pages/api/jsonplaceholder';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {

    const response = await jsonplaceholder.get('/posts')

    return response.data
})


const postAdapter = createEntityAdapter({
    sortComparer: (a, b) => b.id - a.id
});
const initialState = postAdapter.getInitialState({
    status: 'idle',
})

export const { selectById: selectPostById, selectIds: selectPostIds, selectAll: selectAllPosts } = postAdapter.getSelectors(state => state.posts)

export const seletPostByUser = createSelector(
    selectAllPosts,
    (state, userId) => userId,

    (posts, userId) => posts.filter(post => post.userId == userId)
)

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addReactions: {
            reducer(state, action) {
                const { id, reaction, data } = action.payload;
                state.entities[id] = { ...state.entities[id], reaction, data }
            },
            prepare(id, reaction, data) {
                return {
                    payload: { id, reaction, data }
                }
            }
        },
        addTime: {
            reducer(state, action) {
                const { id, data } = action.payload;
                state.entities[id] = { ...state.entities[id], data }
            },
            prepare(id, data) {
                return {
                    payload: { id, data }
                }
            }
        },
        addNewPost: postAdapter.addOne

    },
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
export const { addReactions, addTime, addNewPost } = postsSlice.actions
export default postsSlice.reducer