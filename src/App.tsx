import { useState } from "react";
import { Header, Home, Crew, Destination, Technology } from "./components";
import data from './data/data.json'
const Pages: React.ReactElement[] = [
	<Home />,
	<Destination destinations={data.destinations}/>,
	<Crew crew={data.crew}/>,
	<Technology technology={data.technology}/>,
];
function App() {
	const [page, setPage] = useState(0);
	return (
		<div className="text-purple">
      <Header />
			{Pages[page]}
		</div>
	);
}

export default App;
