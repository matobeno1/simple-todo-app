import { TodosListComponent, TodosListComponentProps } from "../TodosListComponent";

import { connect, MapStateToProps } from "react-redux";

import { NoneProps } from "../../types";
import { IRootState } from "../../store/types";
import { getFilteredTodosIds } from "../../modules/todos/selectors";

type TodosListProps = NoneProps;
type StateProps = Pick<TodosListComponentProps, "todosIds">;

const mapStateToProps: MapStateToProps<StateProps, TodosListProps, IRootState> = (state) => ({
	todosIds: getFilteredTodosIds(state)
});

export const TodosList = connect(mapStateToProps)(TodosListComponent);
