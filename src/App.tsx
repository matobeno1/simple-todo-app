import React, { FunctionComponent } from "react";
import { TodosList } from "./components/TodosList";
import { TodoTitleInput } from "./components/TodoTitleInput";
import { TodoListActionsComponent } from "./components/TodoListActionsComponent";
import classes from "./App.module.scss";
import "antd/dist/antd.css";

const App: FunctionComponent = () => (
	<div className={classes.root}>
		<div className={classes.titleSection}>
			<h1 className={classes.header}>Simple todo app</h1>
			<p>A simple todo app written in React</p>
			<a href="https://github.com/matobeno1/simple-todo-app" rel="noreferrer" target="_blank">
				Github repo
			</a>
		</div>
		<TodoTitleInput />
		<TodosList />
		<TodoListActionsComponent />
	</div>
);

export default App;
