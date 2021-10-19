import React, { FunctionComponent, ChangeEventHandler } from "react";

export type TodoTitleInputComponentProps = {
	title: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
};

export const TodoTitleInputComponent: FunctionComponent<TodoTitleInputComponentProps> = ({
	title,
	onChange,
}) => (
	<div>
		<input value={title} onChange={onChange} type="text"/>
	</div>
);
