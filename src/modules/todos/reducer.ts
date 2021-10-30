import {
	combineReducers,
	createEntityAdapter,
	createSlice,
	PayloadAction,
	Reducer,
	nanoid,
	EntityId, Update,
} from "@reduxjs/toolkit";
import { Todo, ITodosState, AddTodoActionPayloadType, TodoFilter } from "./types";

const todosAdapter = createEntityAdapter<Todo>({
	selectId: todo => todo.todoId,
});

const emptyInitialState = todosAdapter.getInitialState();
const defaultTodos: Todo[] = [
	{
		todoId: nanoid(),
		title: "Buy groceries",
		completed: false,
	},
	{
		todoId: nanoid(),
		title: "Call Amy",
		completed: true,
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
		toggleAllComplete: (state, action: PayloadAction<{areAllTodosComplete: boolean}>) => {
			const updates: Update<Todo>[] = state.ids.map(todoId => ({ id: todoId, changes: {
				id: todoId,
				completed: !action.payload.areAllTodosComplete
			} }));
			todosAdapter.updateMany(state, updates);
		},
		changeTitle: (state, action: PayloadAction<{title: string, todoId: EntityId}>) => {
			const { todoId, title } = action.payload;
			if (!title) {
				todosAdapter.removeOne(state, todoId);
			} else {
				todosAdapter.updateOne(state, {
					id: todoId,
					changes: {
						title,
					}
				});
			}
		},
		delete: (state, action: PayloadAction<{todoId: EntityId}>) => {
			const { todoId } = action.payload;
			todosAdapter.removeOne(state, todoId);
		},

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

const activeFilter = createSlice({
	name: "activeFilter",
	initialState: TodoFilter.ALL,
	reducers: {
		set: (state, action: PayloadAction<{filterValue: TodoFilter}>) => action.payload.filterValue
	}
});

export const reducer: Reducer<ITodosState> = combineReducers({
	todos: todoSlice.reducer,
	newTodoTitle: newTodoTitle.reducer,
	activeFilter: activeFilter.reducer,
});

export const {
	add: createAddTodoAction,
	toggleComplete: createToggleCompleteAction,
	toggleAllComplete: createToggleAllCompleteAction,
	changeTitle: createChangeTitleAction,
	delete: createDeleteTodoAction,
} = todoSlice.actions;
export const {
	change: createChangeNewTodoTitleAction
} = newTodoTitle.actions;
export const {
	set: createSetActiveFilterAction
} = activeFilter.actions;

export const todosSelectors = todosAdapter.getSelectors();
