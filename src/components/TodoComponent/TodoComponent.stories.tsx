import React from "react";
import { Meta } from "@storybook/react";

import { TodoComponent, TodoComponentProps } from "./TodoComponent";

export default {
	title: "TodoComponent",
	component: TodoComponent,
	argTypes: {
		isComplete: {
			name: "Is complete",
			control: {
				type: "boolean",
			},
			defaultValue: false,
		},
	}
} as Meta<TodoComponentProps>;

const Template = (args: TodoComponentProps) => <TodoComponent {...args} />;

export const BasicUsage = Template.bind({});
