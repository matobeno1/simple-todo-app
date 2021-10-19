import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { rootReducer as reducer } from "./rootReducer";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

/** @see https://redux-toolkit.js.org/api/getDefaultMiddleware#included-default-middleware */
const middleware: ConfigureStoreOptions["middleware"] = (getDefaultMiddleware) => (
	getDefaultMiddleware().concat(sagaMiddleware)
);

export const store = configureStore({
	reducer,
	middleware,
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
