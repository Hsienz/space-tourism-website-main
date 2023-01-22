import { useState } from "react";
import Image, { ImagePropType, getAsset } from "../image/Image";
import Instruction, { InstructionPropType } from "./components/Instruction";
import Tag from "../tag/Tag";
import { DestinationType } from "../../data/type";
import Title from "../title/Title";

export type DestinationPropType = {
	destinations: DestinationType[];
};

const Destination = (props: DestinationPropType) => {
	const [index, setIndex] = useState(0);
	return (
		<div className="flex flex-col items-center h-[850px] relative">
			<div className="background bg-[url('/src/assets/destination/background-destination-mobile.jpg')] md:bg-[url('/src/assets/destination/background-destination-tablet.jpg')] xl:bg-[url('/src/assets/destination/background-destination-desktop.jpg')]"></div>
			<div>
				{" "}
				<div className="mt-[88px] md:mt-[136px] md:ml-[38.5px]">
					{" "}
					<Title number="01" title="Pick your destination" />{" "}
				</div>
				<div className="h-[170px] md:h-[300px] aspect-square mx-auto mt-[32px]">
					{" "}
					<Image
						src={getAsset(props.destinations[index].images.png)}
					/>
				</div>
				<div className="mt-[26px] flex gap-x-[27px] justify-center md:mt-[53px]">
					{props.destinations.map((x, i) => (
						<Tag
							key={x.name}
							title={x.name}
							onClick={() => setIndex(i)}
						/>
					))}
				</div>
				<div className="mt-[20px] md:mt-[32px]">
					{" "}
					<Instruction destination={props.destinations[index]} />
				</div>
			</div>
		</div>
	);
};
export default Destination;
