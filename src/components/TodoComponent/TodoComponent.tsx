import React, { FunctionComponent, PropsWithChildren } from "react";
import classes from "./TodoComponent.module.css";
import classNames from "classnames/bind";

export type TodoComponentProps = PropsWithChildren<{
	isComplete?: boolean;
}>

const styles = {
	isComplete: classes.complete
};

const cx = classNames.bind(styles);

export const TodoComponent: FunctionComponent<TodoComponentProps> = ({
	isComplete = false,
}) => {
	return (
		<div className={
			cx({
				isComplete,
			})
		}>
			{isComplete ? "complete" : "incomplete"}
		</div>
	);
};
