import { combineReducers, createEntityAdapter, createSlice, PayloadAction, Reducer, nanoid } from "@reduxjs/toolkit";
import { Todo, ITodosState, AddTodoActionPayloadType } from "./types";

const todosAdapter = createEntityAdapter<Todo>({
	selectId: todo => todo.todoId,
});

const todoSlice = createSlice({
	name: "todos",
	initialState: todosAdapter.getInitialState(),
	reducers: {
		add: {
			reducer: (state, action: PayloadAction<AddTodoActionPayloadType>) => {
				if (!action.payload.title) {
					return;
				}
				todosAdapter.addOne(state, action);
			},
			prepare: (payload: Pick<AddTodoActionPayloadType, "title">) => {
				const todoId = nanoid();
				return { payload: { todoId, title: payload.title, completed: false } };
			},
		}
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

export const todosSelectors = todosAdapter.getSelectors();
