import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { TodosFilterComponent, TodosFilterComponentProps } from "../TodosFilterComponent";
import { NoneProps } from "../../types";
import { IRootState } from "../../store/types";
import { createSetActiveFilterAction, getActiveTodoFilter } from "../../modules/todos";

type TodoFilterProps = NoneProps;
type DispatchProps = Pick<TodosFilterComponentProps, "onChange">;
type StateProps = Pick<TodosFilterComponentProps, "activeFilter">;

const mapStateToProps: MapStateToProps<StateProps, TodoFilterProps, IRootState> = (state) => ({
	activeFilter: getActiveTodoFilter(state)
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, TodoFilterProps> = (dispatch) => ({
	onChange: (filterValue) => dispatch(createSetActiveFilterAction({ filterValue }))
});

export const TodosFilter = connect(mapStateToProps, mapDispatchToProps)(TodosFilterComponent);
