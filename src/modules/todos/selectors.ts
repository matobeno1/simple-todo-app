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

export const getCompleteTodosIds = createSelector<
	IRootState,
	ReturnType<typeof todosSelectors.selectAll>,
	EntityId[]
	>(
		state => todosSelectors.selectAll(getTodosEntityState(state)),
		(todos) => (
			todos.filter(todo => todo.completed).map(todo => todo.todoId)
		)
	);

export const getIncompleteTodosIds = createSelector<
	IRootState,
	ReturnType<typeof todosSelectors.selectAll>,
	EntityId[]
	>(
		state => todosSelectors.selectAll(getTodosEntityState(state)),
		(todos) => (
			todos.filter(todo => !todo.completed).map(todo => todo.todoId)
		)
	);

export const getFilteredTodosIds = createSelector<
	IRootState,
	ReturnType<typeof getActiveTodoFilter>,
	ReturnType<typeof getCompleteTodosIds>,
	ReturnType<typeof getIncompleteTodosIds>,
	ReturnType<typeof getTodosIds>,
	EntityId[]
	>(
		getActiveTodoFilter,
		getCompleteTodosIds,
		getIncompleteTodosIds,
		getTodosIds,
		(
			activeFilter,
			completeTodosIds,
			incompleteTodosIds,
			allTodosIds
		) => {
			switch (activeFilter) {
			case TodoFilter.COMPLETE:
				return completeTodosIds;
			case TodoFilter.INCOMPLETE:
				return incompleteTodosIds;
			default:
				return allTodosIds;
			}
		}
	);
