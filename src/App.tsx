import { useState } from "react";
import { Header, Home, Crew, Destination, Technology } from "./components";
import data from "./data/data.json";
function App() {
	const [page, setPage] = useState(0);
	const Pages: React.ReactElement[] = [
		<Home onClick={() => setPage(1)} />,
		<Destination destinations={data.destinations} />,
		<Crew crew={data.crew} />,
		<Technology technology={data.technology} />,
	];
	return (
		<div className="text-white w-screen min-h-screen text-center xl:pt-[40px]">
			<Header index={page} setIndex={setPage} />
			{Pages[page]}
		</div>
	);
}

export default App;
