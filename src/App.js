import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./component/Home";

export default function App() {
	return (<Router>
		<Routes>
			<Route index path="/" element={<Home />} />
		</Routes>
	</Router>);
}
