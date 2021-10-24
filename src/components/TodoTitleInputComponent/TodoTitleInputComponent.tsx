import React, { FunctionComponent, ChangeEventHandler, KeyboardEventHandler, useRef } from "react";
import { Input, Button } from "antd";

import classes from "./TodoTitleInputComponent.module.scss";

export type TodoTitleInputComponentProps = Readonly<{
	title: string;
	onChange: (title: string) => void;
	onSubmit: (title: string) => void;
}>;

export const TodoTitleInputComponent: FunctionComponent<TodoTitleInputComponentProps> = ({
	title,
	onChange,
	onSubmit,
}) => {
	const ref = useRef<Input>(null);
	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		onChange(e.target.value);
	};
	const handleSubmit = () => {
		title && onSubmit(title);
		ref.current?.focus();
	};
	const handleKeyPress: KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key === "Enter") {
			title && onSubmit(title);
		}
	};

	return (
		<div className={classes.root}>
			<Input
				type="text"
				placeholder={"Add a task..."}
				className={classes.input}
				required={true}
				ref={ref}
				value={title}
				onKeyPress={handleKeyPress}
				onChange={handleChange}
			/>
			<Button type="primary" onClick={handleSubmit}>Create</Button>
		</div>
	);
};
