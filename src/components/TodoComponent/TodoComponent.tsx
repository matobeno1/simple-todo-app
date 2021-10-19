import React, { FunctionComponent, PropsWithChildren } from "react";
import classes from "./TodoComponent.module.css";
import classNames from "classnames";

export type TodoComponentProps = PropsWithChildren<{
	completed?: boolean;
}>

export const TodoComponent: FunctionComponent<TodoComponentProps> = ({
	completed = true,
	children,
}) => {
	return (
		<div className={classNames(classes.root, {
			[classes.completed]: completed,
		})}>
			{children}
		</div>
	);
};
