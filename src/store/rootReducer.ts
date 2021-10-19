import { combineReducers, Reducer } from "@reduxjs/toolkit";

import { reducer as todosReducer } from "../modules/todos";
import { IRootState } from "./types";

export const rootReducer: Reducer<IRootState> = combineReducers({
	todos: todosReducer,
});
