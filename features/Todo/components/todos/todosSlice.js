import { createSlice, createSelector } from '@reduxjs/toolkit';

import { StatusFilters } from '../filter/filterSlice';

const initState = {
    entities: {}
}

let idNumber = 1;

//START--------REDUCER

const todoSlice = createSlice({
    name: 'todos',
    initialState: initState,
    reducers: {
        todoAdded: {
            reducer(state, action) {
                const todo = action.payload
                state.entities[todo.id] = todo
            },
            prepare(text) {
                return {
                    payload: { id: idNumber++, text, completed: false }
                }
            }
        },
        todoToggled(state, action) {
            const toggledTodoId = action.payload
            state.entities[toggledTodoId].completed = !state.entities[toggledTodoId].completed
        },
        todoDeleted(state, action) {
            const deletedTodoId = action.payload
            delete state.entities[deletedTodoId]
        },
        markAllCompleted(state) {
            Object.values(state.entities).forEach(todo => {
                todo.completed = true
            })
        },
        clearCompleted(state) {
            Object.values(state.entities).forEach(todo => {
                if (todo.completed) {
                    delete state.entities[todo.id]
                }
            })
        },
        colorChange: {
            reducer(state, action) {
                const { id, color } = action.payload
                state.entities[id].color = color
            },
            prepare(id, color) {
                return {
                    payload: { id, color }
                }
            }
        }
    }
})
//END--------REDUCER

//START--------selected

export const selectTodosIds = (id) => state => state.todos.entities[id];
export const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

export const selectTodos = createSelector(
    state => state.todos.entities,
    (select) => Object.values(select)
)

const selectFilterTodos = createSelector(

    selectTodos,
    state => state.filter,

    (todos, filter) => {

        const { status, colors } = filter
        const showAll = status === StatusFilters.All

        if (showAll && colors.length === 0) {
            return todos
        }

        const showCompleted = status === StatusFilters.Completed

        return todos.filter(todo => {

            const statusFilter = showAll || todo.completed === showCompleted
            const colorsFilter = colors.length === 0 || colors.includes(todo.color)

            return statusFilter && colorsFilter
        })
    }
)

export const selectFilterdTodoIds = createSelector(
    selectFilterTodos,
    (filteredTodos) => filteredTodos.map(todo => todo.id)
)

export const todoListRemaining = createSelector(
    selectTodos,
    (todoList) => todoList.filter((todo) => !todo.completed).length
)


//end--------selected

export const {
    todoAdded,
    todoToggled,
    todoDeleted,
    markAllCompleted,
    clearCompleted,
    colorChange,
} = todoSlice.actions
export default todoSlice.reducer;