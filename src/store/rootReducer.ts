import { combineReducers, Reducer } from "@reduxjs/toolkit";

import { reducer as todosReducer } from "../modules/todos";
import { RootState } from "./types";

export const rootReducer: Reducer<RootState> = combineReducers({
	todos: todosReducer,
});
