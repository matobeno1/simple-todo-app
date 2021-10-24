import React, { FunctionComponent, useEffect, useState } from "react";

export const ThemeSwitcherComponent: FunctionComponent = () => {
	const [isDark, setIsDark] = useState(false);
	useEffect(() => {
		document.documentElement.setAttribute("data-theme", isDark ? "dark" : "");
	}, [isDark]);
	return (
		<div>
			Dark mode
			<input
				type="checkbox"
				checked={isDark}
				onChange={() => setIsDark((isDark) => !isDark)}
			/>
		</div>
	);
};
