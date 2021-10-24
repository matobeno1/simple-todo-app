import React, { FunctionComponent } from "react";
import { TodosList } from "./components/TodosList";
import { TodoTitleInput } from "./components/TodoTitleInput";
import { TodosFilter } from "./components/TodosFilter";
import classes from "./App.module.scss";

const App: FunctionComponent = () => (
	<div className={classes.root}>
		<h1>Hello</h1>
		<TodoTitleInput />
		<TodosList />
		<TodosFilter />
	</div>
);

export default App;
