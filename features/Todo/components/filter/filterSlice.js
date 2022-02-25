import { createSlice } from '@reduxjs/toolkit';

export const StatusFilters = {
    All: 'all',
    Active: 'active',
    Completed: 'completed'
}
const initState = {
    status: StatusFilters.All,
    colors: []
}

const filterSlice = createSlice({
    name: 'filter',
    initialState: initState,
    reducers: {
        changeStatusFilter(state, action) {
            state.status = action.payload
        },
        changedColorFilter: {
            reducer(state, action) {
                const { colors } = state
                const { color, changType } = action.payload
                switch (changType) {
                    case "added":
                        state.colors.push(color)
                        break
                    case "removed":
                        state.colors = colors.filter(c => c !== color)
                        break
                }
            },
            prepare(color, changType) {
                return {
                    payload: {
                        color, changType
                    }
                }
            }
        }
    }
})



export const selectStatusFilter = state => state.filter.status
export const selectColorsFilter = state => state.filter.colors
export const availableColors = ["green", "blue", "orange", "purple", "red"];


export const { changeStatusFilter, changedColorFilter } = filterSlice.actions
export default filterSlice.reducer;