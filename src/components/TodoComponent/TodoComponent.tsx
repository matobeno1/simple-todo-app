import React, {
	ChangeEventHandler, FocusEventHandler,
	FunctionComponent,
	KeyboardEventHandler,
	MouseEventHandler,
	useEffect,
	useRef,
	useState
} from "react";
import classes from "./TodoComponent.module.css";
import classNames from "classnames";

export type TodoComponentProps = {
	/** Title of the todo. */
	title?: string;
	/** Flag, whether the todo is completed or not. */
	completed?: boolean;
	/** Flag, whether the todo is being edited. */
	onCheck?: () => void;
	/** Function called when the edit title is changed. */
	onEdit?: (title: string) => void;
	onDelete?: () => void;
};

export const TodoComponent: FunctionComponent<TodoComponentProps> = ({
	title = "",
	completed = false,
	onCheck,
	onEdit,
	onDelete,
}) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editedTitle, setEditedTitle] = useState(title);
	const ref = useRef<HTMLInputElement>(null);

	const handleCheck: ChangeEventHandler<HTMLInputElement> = () => {
		onCheck && onCheck();
	};

	const handleEditedTitleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key === "Escape") {
			setIsEditing(false);
			setEditedTitle(title);
		}
	};

	const handleEditedTitleKeyPress: KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key === "Enter") {
			onEdit && onEdit(editedTitle);
			setIsEditing(false);
		}
	};

	const handleDoubleClick: MouseEventHandler<HTMLInputElement> = () => {
		setIsEditing(true);
		setEditedTitle(title);
	};

	const handleEditedTitleBlur: FocusEventHandler<HTMLInputElement> = () => {
		onEdit && onEdit(editedTitle);
		setIsEditing(false);
	};

	const handleTitleKeyPress: KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key === "Enter") {
			setIsEditing(true);
		}
	};

	useEffect(() => {
		if (isEditing) {
			ref.current?.focus();
		}
	}, [isEditing]);

	const handleEditedTitleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setEditedTitle(e.target.value);
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
				{isEditing ? (
					<input
						ref={ref}
						type="text"
						value={editedTitle}
						onKeyDown={handleEditedTitleKeyDown}
						onKeyPress={handleEditedTitleKeyPress}
						onBlur={handleEditedTitleBlur}
						onChange={handleEditedTitleChange}
					/>
				) : (
					<span
						tabIndex={0}
						onKeyPress={handleTitleKeyPress}
						onDoubleClick={handleDoubleClick}
					>
						{title}
					</span>
				)}
			</div>
			<button onClick={onDelete}>x</button>
		</div>
	);
};
