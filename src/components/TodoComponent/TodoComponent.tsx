import React, { ChangeEventHandler, FunctionComponent, MouseEventHandler } from "react";
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
	onDoubleClick?: () => void;
};

export const TodoComponent: FunctionComponent<TodoComponentProps> = ({
	title = "",
	completed = false,
	editing = false,
	onCheck,
	onDoubleClick,
}) => {
	const handleCheck: ChangeEventHandler<HTMLInputElement> = () => {
		onCheck && onCheck();
	};

	const handleDoubleClick: MouseEventHandler<HTMLInputElement> = () => {
		onDoubleClick && onDoubleClick();
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
				<span
					onDoubleClick={handleDoubleClick}
				>
					{title}
				</span>
			</div>
		</div>
	);
};
