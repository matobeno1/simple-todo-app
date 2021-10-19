import { TodosListComponent, TodosListComponentProps } from "../TodosListComponent";

import { connect, MapStateToProps } from "react-redux";

import { IRootState } from "../../store/types";
import { getTodosIds } from "../../modules/todos";

type TodoTitleInputProps = Record<string, never>;
type StateProps = Pick<TodosListComponentProps, "todosIds">;

const mapStateToProps: MapStateToProps<StateProps,TodoTitleInputProps, IRootState> = (state) => ({
	todosIds: getTodosIds(state)
});

export const TodosList = connect(mapStateToProps)(TodosListComponent);
