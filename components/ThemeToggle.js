import styled from "@emotion/styled";
import { useState, useEffect } from "react";

const ToggleButton = styled.button`
	box-sizing: border-box;
	min-width: 0px;
	--toggle-width: 44px;
	--toggle-height: 22px;
	--toggle-padding: 1px;
	position: relative;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	justify-content: space-around;
	width: var(--toggle-width);
	height: var(--toggle-height);
	padding: var(--toggle-padding);
	border: 0px;
	border-radius: calc(var(--toggle-width) / 2);
	cursor: pointer;
	background: var(--bg-color-toggle);
	transition: background 0.25s ease-in-out 0s, box-shadow 0.25s ease-in-out 0s;
	&:focus {
		outline-offset: 2px;
	}
	&:focus:not(:focus-visible) {
		outline: none;
	}
`;

const ToggleThumb = styled.span`
	position: absolute;
	top: var(--toggle-padding);
	left: var(--toggle-padding);
	width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
	height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
	border-radius: 50%;
	background: white;
	transition: transform 0.25s ease-in-out;
	transform: ${(p) =>
		p.activeTheme === "dark"
			? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
			: "none"};
`;

export default function ThemeToggle() {
	const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
	const inactiveTheme = activeTheme === "light" ? "dark" : "light";

	useEffect(() => {
		const savedTheme = window.localStorage.getItem("theme");
		savedTheme && setActiveTheme(savedTheme);
	}, []);

	useEffect(() => {
		document.body.dataset.theme = activeTheme;
		window.localStorage.setItem("theme", activeTheme);
	}, [activeTheme]);

	return (
		<ToggleButton
			aria-label={`Change to ${inactiveTheme} mode`}
			title={`Change to ${inactiveTheme} mode`}
			type="button"
			onClick={() => setActiveTheme(inactiveTheme)}
		>
			<ToggleThumb activeTheme={activeTheme} />
			<span aria-hidden={true} className="fs-14">☀️</span>
			<span aria-hidden={true} className="fs-14">🌙</span>
		</ToggleButton>
	);
};
