import React, { FunctionComponent, ChangeEventHandler } from "react";

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
	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		onChange(e.target.value);
	};
	const handleSubmit = () => {
		onSubmit(title);
	};

	return (
		<div>
			<input value={title} onChange={handleChange} type="text"/>
			<button onClick={handleSubmit}>Create</button>
		</div>
	);
};
