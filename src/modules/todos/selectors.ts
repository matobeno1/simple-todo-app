import { Selector } from "react-redux";

import { todosSelectors } from "./reducer";
import { IRootState } from "../../store/types";
import { ITodosState, Todo } from "./types";
import { EntityState } from "@reduxjs/toolkit";

export const getModel: Selector<IRootState, ITodosState> = (state) => state.todos;

export const getTodosEntityState: Selector<IRootState, EntityState<Todo>> = (state) => getModel(state).todos;

export const getNewTodoTitle: Selector<IRootState, string> = (state) => getModel(state).newTodoTitle;

export const getTodosIds: Selector<IRootState, EntityState<Todo>["ids"]> = (state: IRootState) => todosSelectors.selectIds(getTodosEntityState(state));
