import { connect, MapStateToProps } from "react-redux";
import { EntityId } from "@reduxjs/toolkit";

import { TodoComponent, TodoComponentProps } from "../TodoComponent";
import { getTodoById } from "../../modules/todos/selectors";
import { IRootState } from "../../store/types";

type TodoProps = {
	todoId: EntityId
};
type StateProps = Pick<TodoComponentProps, "title" | "completed">;

const mapStateToProps: MapStateToProps<StateProps, TodoProps, IRootState> = (state, { todoId }) => {
	const todo = getTodoById(state, { todoId });
	return {
		title: todo.title,
		completed: todo.completed,
	};
};

export const Todo = connect(mapStateToProps)(TodoComponent);
