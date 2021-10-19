import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";

import { TodoTitleInputComponent, TodoTitleInputComponentProps } from "../TodoTitleInputComponent";
import { IRootState } from "../../store/types";
import { createChangeNewTodoTitleAction } from "../../modules/todos";
import { getNewTodoTitle } from "../../modules/todos/selectors";

type TodoTitleInputProps = Record<string, never>;
type StateProps = Pick<TodoTitleInputComponentProps, "title">;
type DispatchProps = Pick<TodoTitleInputComponentProps, "onChange">;

const mapStateToProps: MapStateToProps<StateProps,TodoTitleInputProps, IRootState> = (state) => ({
	title: getNewTodoTitle(state)
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, TodoTitleInputProps> = {
	onChange: (title) => createChangeNewTodoTitleAction({ title })
};

export const TodoTitleInput = connect(mapStateToProps, mapDispatchToProps)(TodoTitleInputComponent);
