import { useState } from "react";
import { TechnologyType } from "../../data/type";
import Image, { getAsset } from "../image/Image";
import Circle from "../circle/Circle";
import Instruction from "./componenets/Instruction";
import Title from "../title/Title";

type TechnologyPropType = {
	technology: TechnologyType[];
};
const Technology = (props: TechnologyPropType) => {
	const [index, setIndex] = useState(0);
	return (
		<div className="flex flex-col px-[24px]">
			<div className="background bg-[url('/src/assets/technology/background-technology-mobile.jpg')] md:bg-[url('/src/assets/technology/background-technology-tablet.jpg')] xl:bg-[url('/src/assets/technology/background-technology-desktop.jpg')]"></div>
			<div className="mt-[88px]">
				<Title number="03" title="Space launch 101" />
			</div>
			<div className="h-[170px] mt-[32px] -mx-[24px]">
				{" "}
				<Image
					src={getAsset(props.technology[index].images.landscape)}
				/>
			</div>
            <p className="mt-[34px] uppercase subheading2">
                The terminology
            </p>
			<div className="flex gap-x-[12px] justify-center items-center mt-[9px]">
				{props.technology.map((x, i) => (
					<Circle number={i + 1} onClick={() => setIndex(i)} />
				))}
			</div>
<div className="mt-[26px]">			<Instruction technology={props.technology[index]} /></div>
		</div>
	);
};
export default Technology;
