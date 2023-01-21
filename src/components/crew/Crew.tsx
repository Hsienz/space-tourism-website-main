import { useState } from "react";
import { CrewType } from "../../data/type";
import Instruction from "./components/Instruction";
import Dot from "../dot/Dot";
import Image, { getAsset } from "../image/Image";
import Title from "../title/Title";

type CrewPropType = {
	crew: CrewType[];
};

const Crew = (props: CrewPropType) => {
	const [index, setIndex] = useState(0);
	return (
		<div className="flex flex-col px-[32px]">
			<div className="background bg-[url('/src/assets/crew/background-crew-mobile.jpg')] md:bg-[url('/src/assets/crew/background-crew-tablet.jpg')] xl:bg-[url('/src/assets/crew/background-crew-desktop.jpg')]"></div>
			<div className="mt-[88px]">
				<Title number="02" title="Meet your crew" />
			</div>
			<div className="h-[222px] mt-[32px] mx-auto">
				<Image src={getAsset(props.crew[index].images.png)} />
			</div>
            <hr className="border-t-[1px] border-[#383B4B]"/>
			<div className="my-[32px] flex items-center justify-center gap-x-[16px]">
				{props.crew.map((x, i) => (
					<Dot key={x.name} onClick={() => setIndex(i)} />
				))}
			</div>
			<div className="">
				{" "}
				<Instruction crew={props.crew[index]} />
			</div>
		</div>
	);
};
export default Crew;
