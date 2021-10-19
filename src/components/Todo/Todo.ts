import { connect } from "react-redux";
import { TodoComponent, TodoComponentProps } from "../TodoComponent";



const mapStateToProps = () => {

};

export const Todo = connect(mapStateToProps)(TodoComponent);
