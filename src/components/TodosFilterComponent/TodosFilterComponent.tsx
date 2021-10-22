import React from "react";
import { FunctionComponent } from "react";

export const TodosFilterComponent: FunctionComponent = () => {
	return (
		<div>
			<button>All</button>
			<button>Active</button>
			<button>Completed</button>
		</div>
	);
};
