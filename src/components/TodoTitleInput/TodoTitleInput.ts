import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { TodoTitleInputComponent, TodoTitleInputComponentProps } from "../TodoTitleInputComponent";
import { RootState } from "../../store/types";

type TodoTitleInputProps = Record<string, never>;
type StateProps = Pick<TodoTitleInputComponentProps, "title">;
type DispatchProps = Pick<TodoTitleInputComponentProps, "onChange">;

const mapStateToProps: MapStateToProps<StateProps,TodoTitleInputProps, RootState> = () => ({
	title: "Hi"
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, TodoTitleInputProps> = {
	onChange: () => {}
};

export const TodoTitleInput = connect(mapStateToProps, mapDispatchToProps)(TodoTitleInputComponent);
