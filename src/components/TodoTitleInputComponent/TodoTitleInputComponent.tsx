import React, { FunctionComponent, ChangeEventHandler, KeyboardEventHandler } from "react";

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
		title && onSubmit(title);
	};
	const handleKeyPress: KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key === "Enter") {
			title && onSubmit(title);
		}
	};

	return (
		<div>
			<input onKeyPress={handleKeyPress} value={title} onChange={handleChange} type="text"/>
			<button onClick={handleSubmit}>Create</button>
		</div>
	);
};
