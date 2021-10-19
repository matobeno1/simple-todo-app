import React, { FunctionComponent, PropsWithChildren } from "react";

export type TodoComponentProps = PropsWithChildren<{
	isComplete?: boolean;
}>

export const TodoComponent: FunctionComponent<TodoComponentProps> = ({
	isComplete = false,
}) => {
	return (
		<div>
			{isComplete ? "complete" : "incomplete"}
		</div>
	);
};
