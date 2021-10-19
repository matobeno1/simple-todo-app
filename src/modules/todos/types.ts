import { EntityState } from "@reduxjs/toolkit";

export type Todo = {
	todoId: string;
	title: string;
	completed: boolean;
};

export interface ITodosState {
	todos: EntityState<Todo>,
	newTodoTitle: string,
}
