import React, { FunctionComponent } from "react";
import { EntityId } from "@reduxjs/toolkit";

import { Todo } from "../Todo";

export type TodosListComponentProps = {
	todosIds: EntityId[]
};

export const TodosListComponent: FunctionComponent<TodosListComponentProps> = ({
	todosIds,
}) => {
	return (
		<div>
			{todosIds.map(todoId => (
				<Todo
					key={todoId}
					todoId={todoId}
				/>
			))}
		</div>
	);
};
