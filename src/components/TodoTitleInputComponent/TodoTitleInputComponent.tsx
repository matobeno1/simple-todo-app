import React, { FunctionComponent, ChangeEventHandler, KeyboardEventHandler, useRef } from "react";

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
	const ref = useRef<HTMLInputElement>(null);
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
		<div>
			<input
				type="text"
				required={true}
				ref={ref}
				value={title}
				onKeyPress={handleKeyPress}
				onChange={handleChange}
			/>
			<button onClick={handleSubmit}>Create</button>
		</div>
	);
};
