import React, { FunctionComponent, ChangeEventHandler } from "react";

export type TodoTitleInputComponentProps = {
	title: string;
	onChange: (title: string) => void;
};

export const TodoTitleInputComponent: FunctionComponent<TodoTitleInputComponentProps> = ({
	title,
	onChange,
}) => {
	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		onChange(e.target.value);
	};

	return (
		<div>
			<input value={title} onChange={handleChange} type="text"/>
		</div>
	);
};
