import { Selector } from "react-redux";
import { IRootState } from "../../store/types";
import { ITodosState } from "./types";

export const getModel: Selector<IRootState, ITodosState> = (state) => state.todos;

export const getNewTodoTitle: Selector<IRootState, string> = (state) => getModel(state).newTodoTitle;

export const getTodosIds = (state: any) => []; // TODO
