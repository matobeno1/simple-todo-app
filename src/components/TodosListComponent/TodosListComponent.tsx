import React, { FunctionComponent } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { List } from "antd";

import classes from "./TodosListComponent.module.css";
import { Todo } from "../Todo";

export type TodosListComponentProps = {
	todosIds: EntityId[]
};

export const TodosListComponent: FunctionComponent<TodosListComponentProps> = ({
	todosIds,
}) => {
	return (
		<List
			size="small"
			bordered
			dataSource={todosIds}
			renderItem={todoId => (
				<div className={classes.item}>
					<Todo
						key={todoId}
						todoId={todoId}
					/>
				</div>
			)}
		/>
	);
};
