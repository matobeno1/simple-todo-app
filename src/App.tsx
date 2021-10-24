import React, { FunctionComponent } from "react";
import { TodosList } from "./components/TodosList";
import { TodoTitleInput } from "./components/TodoTitleInput";
import { TodosFilter } from "./components/TodosFilter";
import classes from "./App.module.scss";
import "antd/dist/antd.css";

const App: FunctionComponent = () => (
	<div className={classes.root}>
		<h1>Tasks</h1>
		<TodoTitleInput />
		<TodosList />
		<TodosFilter />
	</div>
);

export default App;
