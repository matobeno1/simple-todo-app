import React, { FunctionComponent } from "react";
import { TodosFilter } from "../TodosFilter";

import classes from "./TodoListActionsComponent.module.scss";

export const TodoListActionsComponent: FunctionComponent = () => (
	<div className={classes.root}>
		<TodosFilter />
	</div>
);
