import { connect, MapDispatchToProps } from "react-redux";
import { RemoveCompletedButtonComponent, RemoveCompletedButtonComponentProps } from "../RemoveCompletedButtonComponent";
import { NoneProps } from "../../types";


type DispatchProps = Pick<RemoveCompletedButtonComponentProps, "onClick">;

const mapDispatchToProps: MapDispatchToProps<DispatchProps, NoneProps>;

export const RemoveCompletedButton = connect()();
