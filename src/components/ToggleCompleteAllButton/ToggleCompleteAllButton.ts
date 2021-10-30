import {
	ToggleCompleteAllButtonComponent,
	ToggleCompleteAllButtonComponentProps
} from "../ToggleCompleteAllButtonComponent";
import { connect, MapDispatchToProps, MapStateToProps, MergeProps } from "react-redux";
import { NoneProps } from "../../types";
import { IRootState } from "../../store/types";
import { isCompleteAll, isTodoListEmpty } from "../../modules/todos/selectors";

type StateProps = Pick<ToggleCompleteAllButtonComponentProps, "isCompleteAll" | "noTodosAvailable">;
type DispatchProps = {
	onClick: (isCompleteAll: boolean) => void;
};
type MergedProps = StateProps & DispatchProps & Pick<ToggleCompleteAllButtonComponentProps, "onClick">;

const mapStateToProps: MapStateToProps<StateProps, NoneProps, IRootState> = (state) => ({
	isCompleteAll: isCompleteAll(state),
	noTodosAvailable: isTodoListEmpty(state),
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, NoneProps> = (dispatch) => ({
	onClick: (complete) => dispatch({ type: "f", complete })
});

const mergeProps: MergeProps<StateProps, DispatchProps, NoneProps, MergedProps> = (
	stateProps,
	{ onClick, ...dispatchProps },
	ownProps
) => ({
	...stateProps,
	...dispatchProps,
	...ownProps,
	onClick: () => onClick(stateProps.isCompleteAll)
});

export const ToggleCompleteAllButton = connect(mapStateToProps, mapDispatchToProps, mergeProps)(ToggleCompleteAllButtonComponent);
