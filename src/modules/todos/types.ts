import { EntityState } from "@reduxjs/toolkit";

export type Todo = {
	todoId: string;
	title: string;
	completed: boolean;
};

export type TodosState = {
	todos: EntityState<Todo>,
	newTodoTitle: string,
};
