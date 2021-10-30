import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { RemoveCompletedButtonComponent, RemoveCompletedButtonComponentProps } from "../RemoveCompletedButtonComponent";
import { NoneProps } from "../../types";
import { IRootState } from "../../store/types";
import { getCompleteTodosAmount } from "../../modules/todos/selectors";
import { createDeleteAllCompletedAction } from "../../modules/todos/reducer";

type StateProps = Pick<RemoveCompletedButtonComponentProps, "noCompleteTodos">;
type DispatchProps = Pick<RemoveCompletedButtonComponentProps, "onClick">;

const mapStateToProps: MapStateToProps<StateProps, NoneProps, IRootState> = (state) => ({
	noCompleteTodos: getCompleteTodosAmount(state) === 0
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, NoneProps> = (dispatch) => ({
	onClick: () => dispatch(createDeleteAllCompletedAction())
});

export const RemoveCompletedButton = connect(mapStateToProps, mapDispatchToProps)(RemoveCompletedButtonComponent);
