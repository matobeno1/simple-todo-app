import React, { ChangeEventHandler, FunctionComponent } from "react";
import classes from "./TodoComponent.module.css";
import classNames from "classnames";

export type TodoComponentProps = {
	/** Title of the todo. */
	title?: string;
	/** Flag, whether the todo is completed or not. */
	completed?: boolean;
	/** Flag, whether the todo is being edited. */
	editing?: boolean;
	onCheck?: () => void;
};

export const TodoComponent: FunctionComponent<TodoComponentProps> = ({
	title = "",
	completed = false,
	editing = false,
	onCheck,
}) => {
	const handleCheck: ChangeEventHandler<HTMLInputElement> = () => {
		onCheck && onCheck();
	};

	return (
		<div className={classNames(classes.root, {
			[classes.completed]: completed,
		})}>
			<div>
				<input
					type="checkbox"
					checked={completed}
					onChange={handleCheck}
				/>
				<label htmlFor="">{title}</label>
			</div>
		</div>
	);
};
