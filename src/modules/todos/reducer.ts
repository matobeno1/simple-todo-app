import { createEntityAdapter, createSlice, Reducer } from "@reduxjs/toolkit";
import { Todo, TodosState } from "./types";

const todosAdapter = createEntityAdapter<Todo>({
	selectId: todo => todo.todoId,
});

const todoSlice = createSlice({
	name: "todos",
	initialState: todosAdapter.getInitialState(),
	reducers: {
		add: todosAdapter.addOne
	}
});

export const reducer: Reducer<TodosState> = todoSlice.reducer;

export const {
	add: createAddTodoAction
} = todoSlice.actions;
