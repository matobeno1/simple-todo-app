import {
	combineReducers,
	createEntityAdapter,
	createSlice,
	PayloadAction,
	Reducer,
	nanoid,
	EntityId
} from "@reduxjs/toolkit";
import { Todo, ITodosState, AddTodoActionPayloadType } from "./types";

const todosAdapter = createEntityAdapter<Todo>({
	selectId: todo => todo.todoId,
});

const emptyInitialState = todosAdapter.getInitialState();
const defaultTodos: [Todo] = [
	{
		todoId: nanoid(),
		title: "Hello",
		completed: false,
	}
];
const filledState = todosAdapter.upsertMany(emptyInitialState, defaultTodos);

const todoSlice = createSlice({
	name: "todos",
	initialState: filledState,
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
		},
		toggleComplete: (state, action: PayloadAction<{todoId: EntityId}>) => {
			const { todoId } = action.payload;
			const entity = state.entities[todoId];
			if (entity) {
				todosAdapter.updateOne(state, {
					id: todoId,
					changes: {
						completed: !entity.completed,
					}
				});
			}
		},
		changeTitle: (state, action: PayloadAction<{title: string, todoId: EntityId}>) => {
			const { todoId, title } = action.payload;
			todosAdapter.updateOne(state, {
				id: todoId,
				changes: {
					title,
				}
			});
		},
		delete: (state, action: PayloadAction<{todoId: EntityId}>) => {
			const { todoId } = action.payload;
			todosAdapter.removeOne(state, todoId);
		}
	}
});

const newTodoTitle = createSlice({
	name: "newTodoTitle",
	initialState: "",
	reducers: {
		change: (state, action: PayloadAction<{title: string}>) => action.payload.title,
	},
	extraReducers: (builder) => {
		builder.addCase(todoSlice.actions.add, () => "");
	}
});

export const reducer: Reducer<ITodosState> = combineReducers({
	todos: todoSlice.reducer,
	newTodoTitle: newTodoTitle.reducer,
});

export const {
	add: createAddTodoAction,
	toggleComplete: createToggleCompleteAction,
	changeTitle: createChangeTitleAction,
	delete: createDeleteTodoAction,
} = todoSlice.actions;
export const {
	change: createChangeNewTodoTitleAction
} = newTodoTitle.actions;

export const todosSelectors = todosAdapter.getSelectors();
