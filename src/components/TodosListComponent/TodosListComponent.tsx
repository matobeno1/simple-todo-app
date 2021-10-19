import React, { FunctionComponent } from "react";
import { EntityId } from "@reduxjs/toolkit";

export type TodosListComponentProps = {
	todosIds: EntityId[]
};

export const TodosListComponent: FunctionComponent<TodosListComponentProps> = ({
	todosIds,
}) => {
	return (
		<div>
			{todosIds.map(id => (
				<div key={id}>{id}</div>
			))}
		</div>
	);
};
