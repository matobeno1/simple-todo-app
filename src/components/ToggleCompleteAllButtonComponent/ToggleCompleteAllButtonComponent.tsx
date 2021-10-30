import React, { FunctionComponent } from "react";
import { Button } from "antd";
import { FormOutlined } from "@ant-design/icons";

export type ToggleCompleteAllButtonComponentProps = {
	onClick: () => void;
	/** Flag whether every todo is complete. */
	isCompleteAll: boolean;
};

export const ToggleCompleteAllButtonComponent: FunctionComponent<ToggleCompleteAllButtonComponentProps> = ({
	onClick,
	isCompleteAll
}) => (
	<Button
		onClick={onClick}
		title={"Toggle all"}
		type="primary"
		size="middle"
	>
		{isCompleteAll ? "Uncomplete" : "Complete all"}
	</Button>
);
