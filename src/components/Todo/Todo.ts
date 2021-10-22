import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { EntityId } from "@reduxjs/toolkit";

import { TodoComponent, TodoComponentProps } from "../TodoComponent";
import { getTodoById, createToggleCompleteAction, createChangeTitleAction } from "../../modules/todos";
import { IRootState } from "../../store/types";

type TodoProps = {
	todoId: EntityId
};
type StateProps = Pick<TodoComponentProps, "title" | "completed">;
type DispatchProps = Pick<TodoComponentProps, "onCheck" | "onEdit">;

const mapStateToProps: MapStateToProps<StateProps, TodoProps, IRootState> = (state, { todoId }) => {
	const todo = getTodoById(state, { todoId });
	return {
		title: todo.title,
		completed: todo.completed,
	};
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, TodoProps> = (dispatch, { todoId }) => ({
	onCheck: () => dispatch(createToggleCompleteAction({ todoId })),
	onEdit: (title) => dispatch(createChangeTitleAction({ todoId, title }))
});

export const Todo = connect(mapStateToProps, mapDispatchToProps)(TodoComponent);
