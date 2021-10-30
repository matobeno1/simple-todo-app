import {
	ToggleCompleteAllButtonComponent,
	ToggleCompleteAllButtonComponentProps
} from "../ToggleCompleteAllButtonComponent";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { NoneProps } from "../../types";
import { IRootState } from "../../store/types";
import { isCompleteAll } from "../../modules/todos/selectors";

type StateProps = Pick<ToggleCompleteAllButtonComponentProps, "isCompleteAll">;
type DispatchProps = Pick<ToggleCompleteAllButtonComponentProps, "onClick">;

const mapStateToProps: MapStateToProps<StateProps, NoneProps, IRootState> = (state) => ({
	isCompleteAll: isCompleteAll(state),
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, NoneProps> = (dispatch) => ({
	onClick: () => dispatch({ type: "f" })
});

export const ToggleCompleteAllButton = connect(mapStateToProps, mapDispatchToProps)(ToggleCompleteAllButtonComponent);
