import React, { FunctionComponent } from "react";
import { Radio, RadioGroupProps } from "antd";
import classes from "./TodosFilterComponent.module.scss";

import { TodoFilter } from "../../modules/todos";

export type TodosFilterComponentProps = {
	activeFilter: TodoFilter;
	onChange: (filter: TodoFilter) => void;
};

const FILTER_OPTIONS: Array<{label: string, value: TodoFilter}> = [
	{ label: "All", value: TodoFilter.ALL },
	{ label: "Complete", value: TodoFilter.COMPLETE },
	{ label: "Incomplete", value: TodoFilter.INCOMPLETE },
];

export const TodosFilterComponent: FunctionComponent<TodosFilterComponentProps> = ({
	activeFilter,
	onChange,
}) => {
	const handleChange: RadioGroupProps["onChange"] = (e) => {
		onChange(e.target.value as TodoFilter);
	};
	return (
		<div className={classes.root}>
			<Radio.Group
				value={activeFilter}
				onChange={handleChange}
				defaultValue={TodoFilter.ALL}
				buttonStyle="solid"
			>
				{FILTER_OPTIONS.map(({ value, label }) => (
					<Radio.Button key={value} value={value}>
						{label}
					</Radio.Button>
				))}
			</Radio.Group>
		</div>
	);
};
