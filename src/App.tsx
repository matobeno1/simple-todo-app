import React, { FunctionComponent } from "react";
import { TodosList } from "./components/TodosList";
import { TodoTitleInput } from "./components/TodoTitleInput";
import { TodosFilter } from "./components/TodosFilter";
import { ThemeSwitcherComponent } from "./components/ThemeSwitcherComponent";
import classes from "./App.module.scss";

const App: FunctionComponent = () => (
	<div className={classes.root}>
		<h1>Tasks</h1>
		<ThemeSwitcherComponent />
		<TodoTitleInput />
		<TodosList />
		<TodosFilter />
	</div>
);

export default App;
