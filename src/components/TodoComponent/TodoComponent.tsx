import React, {
	ChangeEventHandler, FocusEventHandler,
	FunctionComponent,
	KeyboardEventHandler,
	MouseEventHandler,
	useEffect,
	useRef,
	useState
} from "react";
import { Button } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

import classes from "./TodoComponent.module.scss";
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
		<div className={classes.root}>
			<input
				className={classes.checkbox}
				type="checkbox"
				checked={completed}
				onChange={handleCheck}
			/>
			<div
				className={classNames(classes.content, {
					[classes.completed]: completed,
				})}
				onDoubleClick={handleDoubleClick}
			>
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
					>
						{title}
					</span>
				)}
			</div>
			<Button
				type="primary"
				size={"small"}
				danger
				className={classes.closeButton}
				icon={<CloseCircleOutlined />}
			/>
		</div>
	);
};
