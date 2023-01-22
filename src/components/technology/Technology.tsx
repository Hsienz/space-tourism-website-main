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
		<div className="flex flex-col h-[710px] md:h-[1024px]">
			<div className="background bg-[url('/src/assets/technology/background-technology-mobile.jpg')] md:bg-[url('/src/assets/technology/background-technology-tablet.jpg')] xl:bg-[url('/src/assets/technology/background-technology-desktop.jpg')]"></div>
			<div className="mt-[88px] md:mt-[120px] md:ml-[38px]">
				<Title number="03" title="Space launch 101" />
			</div>
			<div className="h-[170px] md:h-[310px] w-screen mt-[32px] md:mt-[60px]">
				{" "}
				<Image
					src={getAsset(props.technology[index].images.landscape)}
				/>
			</div>
<div className="flex flex-col md:flex-col-reverse">
				<p className="mt-[34px] uppercase subheading2">The terminology</p>
				<div className="flex gap-x-[12px] justify-center items-center mt-[9px] md:mt-[56px] md:gap-x-[16px]">
					{props.technology.map((x, i) => (
						<Circle number={i + 1} onClick={() => setIndex(i)} />
					))}
				</div>
</div>
			<div className="mt-[26px] px-[24px] md:mt-[44px] md:px-[155px]">
				{" "}
				<Instruction technology={props.technology[index]} />
			</div>
		</div>
	);
};
export default Technology;
