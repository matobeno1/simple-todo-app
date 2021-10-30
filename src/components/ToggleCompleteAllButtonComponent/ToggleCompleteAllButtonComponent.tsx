import React, { FunctionComponent } from "react";
import { Button } from "antd";

export type ToggleCompleteAllButtonComponentProps = {
	onClick: () => void;
	/** Flag whether every todo is complete. */
	isCompleteAll: boolean;
	noTodosAvailable: boolean;
};

export const ToggleCompleteAllButtonComponent: FunctionComponent<ToggleCompleteAllButtonComponentProps> = ({
	onClick,
	isCompleteAll,
	noTodosAvailable,
}) => {
	let text = isCompleteAll ? "Uncomplete" : "Complete all";
	if (noTodosAvailable) {
		text = "All done";
	}
	return (
		<Button
			onClick={onClick}
			disabled={noTodosAvailable}
			title="Toggle all"
			type="primary"
			size="middle"
		>
			{text}
		</Button>
	);
};
