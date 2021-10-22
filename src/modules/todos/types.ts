import { EntityState } from "@reduxjs/toolkit";

export enum TodoFilter {
	ALL = "all",
	COMPLETE = "complete",
	INCOMPLETE = "incomplete",
}

export type Todo = {
	todoId: string;
	title: string;
	completed: boolean;
};

export interface ITodosState {
	todos: EntityState<Todo>,
	newTodoTitle: string,
	activeFilter: TodoFilter
}

export type AddTodoActionPayloadType = {
	title: string,
	todoId: string,
	completed: boolean
};
