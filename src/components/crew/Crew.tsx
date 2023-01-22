import { useEffect, useState } from "react";
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
	useEffect(() => {
		const temp = setInterval(() => {
			setIndex((index) => (index + 1) % props.crew.length);
		}, 5000);
		return () => clearInterval(temp);
	}, [index]);
	return (
		<div className="flex flex-col h-full absolute top-0 left-0">
			<div className="background bg-[url('/src/assets/crew/background-crew-mobile.jpg')] md:bg-[url('/src/assets/crew/background-crew-tablet.jpg')] xl:bg-[url('/src/assets/crew/background-crew-desktop.jpg')]">
				<div className="pageTitle">
					<Title number="02" title="Meet your crew" />
				</div>
				<div className="flex flex-col md:flex-col-reverse xl:flex-row-reverse">
					<div className="h-[222px] md:h-[532px] xl:h-[654px] mt-[32px] md:mt-0 mx-auto xl:mr-[186px] md:absolute md:bottom-0 place-self-center">
						<Image src={getAsset(props.crew[index].images.png)} />
					</div>
					<hr className="border-t-[1px] border-[#383B4B] md:hidden" />
					<div className="md:flex xl:flex-col-reverse xl:text-left xl:w-[614px] xl:h-[406px] xl:mt-[156px] xl:mr-auto xl:ml-[165px] xl:items-start md:flex-col-reverse">
						<div className="my-[32px] flex items-center justify-center gap-x-[16px] xl:mt-[120px]">
							{props.crew.map((x, i) => (
								<Dot
									key={x.name}
									onClick={() => setIndex(i)}
									isSelect={() => index == i}
								/>
							))}
						</div>
						<div className="md:mt-[60px] md:h-[182px]">
							{" "}
							<Instruction crew={props.crew[index]} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Crew;
