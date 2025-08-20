import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import './index.css';

export default function App() {
	return (<Router>
		<Routes>
			<Route index path="/" element={<Home />} />
		</Routes>
	</Router>);
}
