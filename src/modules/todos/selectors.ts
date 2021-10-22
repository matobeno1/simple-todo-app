import { Selector } from "react-redux";

import { todosSelectors } from "./reducer";
import { IRootState } from "../../store/types";
import { ITodosState, Todo, TodoFilter } from "./types";
import { createSelector, EntityId, EntityState } from "@reduxjs/toolkit";

export const getModel: Selector<IRootState, ITodosState> = (state) => state.todos;

export const getTodosEntityState: Selector<IRootState, EntityState<Todo>> = (state) => getModel(state).todos;

export const getNewTodoTitle: Selector<IRootState, string> = (state) => getModel(state).newTodoTitle;

export const getTodosIds: Selector<IRootState, EntityState<Todo>["ids"]> = (state: IRootState) => todosSelectors.selectIds(getTodosEntityState(state));

export const getTodoById: Selector<IRootState, Todo, {todoId: EntityId}> = (state, { todoId }) => {
	const todo = todosSelectors.selectById(getTodosEntityState(state), todoId);
	if (todo) {
		return todo;
	}
	throw new Error(`Todo with the id of ${todoId} was not found.`);
};

export const getActiveTodoFilter: Selector<IRootState, TodoFilter> = (state) => getModel(state).activeFilter;

export const getFilteredTodosIds = createSelector<
	IRootState,
	ReturnType<typeof getActiveTodoFilter>,
	ReturnType<typeof todosSelectors.selectAll>,
	EntityId[]
	>(
		getActiveTodoFilter,
		state => todosSelectors.selectAll(getTodosEntityState(state)),
		(todoFilter, todos) => {
			let result = todos;
			switch (todoFilter) {
			case TodoFilter.COMPLETE:
				result = todos.filter(todo => todo.completed);
				break;
			case TodoFilter.INCOMPLETE:
				result = todos.filter(todo => !todo.completed);
				break;
			default:
				break;
			}
			return result.map(todo => todo.todoId);
		}
	);
