export {
	reducer,
	createAddTodoAction,
	createChangeNewTodoTitleAction,
	createToggleCompleteAction,
	createChangeTitleAction,
	createDeleteTodoAction,
} from "./reducer";
export {
	getModel,
	getNewTodoTitle,
	getTodosIds,
	getTodoById,
} from "./selectors";
export type { ITodosState } from "./types";
