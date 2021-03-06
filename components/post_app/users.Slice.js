import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from "@reduxjs/toolkit";
import {post} from "../../services/url";

export const fetchusers = createAsyncThunk("index/fetchusers", async () => {
    const response = await post.get("/users");

    return response.data;
});

const userAdapter = createEntityAdapter();
const initialState = userAdapter.getInitialState({
    status: "idle",
});
export const {selectById: selectUsersById, selectAll: selectUserAll} =
    userAdapter.getSelectors((state) => state.users);

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchusers.pending]: (state) => {
            state.status = "loading";
        },
        [fetchusers.fulfilled]: (state, action) => {
            userAdapter.upsertMany(state, action.payload);
            state.status = "idle";
        },
        [fetchusers.rejected]: (state, action) => {
            state.status = "error";
            console.log(action.payload);
        },
    },
});
// export {} = usersSlice.actions
export default usersSlice.reducer;
