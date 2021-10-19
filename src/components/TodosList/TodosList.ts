import { TodosListComponent, TodosListComponentProps } from "../TodosListComponent";

import { connect, MapStateToProps } from "react-redux";

import { NoneProps } from "@src/types";
import { IRootState } from "../../store/types";
import { getTodosIds } from "../../modules/todos";

type TodosListProps = NoneProps;
type StateProps = Pick<TodosListComponentProps, "todosIds">;

const mapStateToProps: MapStateToProps<StateProps, TodosListProps, IRootState> = (state) => ({
	todosIds: getTodosIds(state)
});

export const TodosList = connect(mapStateToProps)(TodosListComponent);
