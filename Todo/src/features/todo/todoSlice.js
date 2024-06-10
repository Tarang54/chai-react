import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducres: {
        addTodo: (state,action) => {
            const todo = {
                // id: 1,
                // text: "Hello World"
                id: nanoid(),
                text: action.payload 
            }
        },
        removeTodo: () => {},
    }
})