import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
	return (<nav>
		<NavLink to="/">Home</NavLink>
		<a href="/react-tictactoe"><i>TicTacToe</i></a>
		</nav>);
}
