import React, { FunctionComponent } from "react";
import { Button } from "antd";

export type RemoveCompletedButtonComponentProps = {
	onClick: () => void;
	/** Flag whether there are no complete todos. */
	noCompleteTodos: boolean;
};

export const RemoveCompletedButtonComponent: FunctionComponent<RemoveCompletedButtonComponentProps> = ({
	noCompleteTodos,
	onClick
}) => (
	<Button onClick={onClick} disabled={noCompleteTodos}>
        Remove complete
	</Button>
);
