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
		<div className="flex flex-col items-center">
			<div className="background bg-[url('/src/assets/destination/background-destination-mobile.jpg')] md:bg-[url('/src/assets/destination/background-destination-tablet.jpg')] xl:bg-[url('/src/assets/destination/background-destination-desktop.jpg')] min-h-[850px] md:background">
				<div>
					{" "}
					<div className="pageTitle">
						{" "}
						<Title number="01" title="Pick your destination" />{" "}
					</div>
					<div className="xl:flex">
						<div className="h-[170px] md:h-[300px] xl:h-[450px] aspect-square mx-auto mt-[32px] xl:mt-[97px] xl:ml-[230px]">
							{" "}
							<Image
								src={getAsset(
									props.destinations[index].images.png
								)}
							/>
						</div>
						<div className="flex flex-col xl:mt-[147px] xl:ml-[157px] xl:items-start">
							<div className="mt-[26px] flex gap-x-[27px] justify-center md:mt-[53px] xl:m-0">
								{props.destinations.map((x, i) => (
									<Tag
										key={x.name}
										title={x.name}
										onClick={() => setIndex(i)}
										isSelect={() => index == i}
									/>
								))}
							</div>
							<div className="mt-[20px] md:mt-[32px] xl:text-left">
								{" "}
								<Instruction
									destination={props.destinations[index]}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Destination;
