import React, { FunctionComponent } from "react";
import { TodoComponent } from "./components/TodoComponent";
import classes from "./App.module.css";

const App: FunctionComponent = () => (
	<div className={classes.root}>
		<h1>Hello</h1>
		<TodoComponent title={"Hello"} />
	</div>
);

export default App;
