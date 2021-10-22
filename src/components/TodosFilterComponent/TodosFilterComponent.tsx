import React, { ChangeEventHandler, FunctionComponent } from "react";
import { TodoFilter } from "../../modules/todos";

export type TodosFilterComponentProps = {
	activeFilter: TodoFilter;
	onChange: (filter: TodoFilter) => void;
};

const FILTER_OPTIONS: Array<{title: string, value: TodoFilter}> = [
	{ title: "All", value: TodoFilter.ALL },
	{ title: "Complete", value: TodoFilter.COMPLETE },
	{ title: "Incomplete", value: TodoFilter.INCOMPLETE },
];

export const TodosFilterComponent: FunctionComponent<TodosFilterComponentProps> = ({
	activeFilter,
	onChange,
}) => {
	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		onChange(e.target.value as TodoFilter);
	};
	return (
		<div>
			{FILTER_OPTIONS.map(({ value, title }) => (
				<div key={value}>
					<label htmlFor={value}>{title}</label>
					<input
						id={value}
						checked={activeFilter === value}
						type="radio"
						value={value}
						onChange={handleChange}
					/>
				</div>
			))}
		</div>
	);
};
