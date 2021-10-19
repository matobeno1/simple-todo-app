import { Selector } from "react-redux";
import { IRootState } from "../../store/types";
import { TodosState } from "./types";

export const getModel: Selector<IRootState, TodosState> = (state) => state.todos;

export const getNewTodoTitle: Selector<IRootState, string> = (state) => getModel(state).newTodoTitle;
