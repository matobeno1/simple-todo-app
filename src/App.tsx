import React, { FunctionComponent } from "react";
import { TodosList } from "./components/TodosList";
import { TodoTitleInput } from "./components/TodoTitleInput";
import classes from "./App.module.css";

const App: FunctionComponent = () => (
	<div className={classes.root}>
		<h1>Hello</h1>
		<TodoTitleInput />
		<TodosList />
	</div>
);

export default App;
