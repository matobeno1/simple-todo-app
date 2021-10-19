import React, { ChangeEventHandler, FunctionComponent, PropsWithChildren } from "react";
import classes from "./TodoComponent.module.css";
import classNames from "classnames";

export type TodoComponentProps = {
	/** Text of the todo. */
	text?: string;
	/** Flag, whether the todo is completed or not. */
	completed?: boolean;
	/** Flag, whether the todo is being edited. */
	editing?: boolean;
	onCheck?: () => void;
}

export const TodoComponent: FunctionComponent<TodoComponentProps> = ({
	text = "",
	completed = true,
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
				<label htmlFor="">{text}</label>
			</div>
		</div>
	);
};
