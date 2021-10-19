import { combineReducers, createEntityAdapter, createSlice, PayloadAction, Reducer } from "@reduxjs/toolkit";
import { Todo, ITodosState } from "./types";

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

const newTodoTitle = createSlice({
	name: "newTodoTitle",
	initialState: "",
	reducers: {
		change: (state, action: PayloadAction<{title: string}>) => action.payload.title,
	}
});

export const reducer: Reducer<ITodosState> = combineReducers({
	todos: todoSlice.reducer,
	newTodoTitle: newTodoTitle.reducer,
});

export const {
	add: createAddTodoAction
} = todoSlice.actions;
export const {
	change: createChangeNewTodoTitleAction
} = newTodoTitle.actions;
