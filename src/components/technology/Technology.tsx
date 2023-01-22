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
		<div className="flex flex-col">
			<div className="background bg-[url('/src/assets/technology/background-technology-mobile.jpg')] md:bg-[url('/src/assets/technology/background-technology-tablet.jpg')] xl:bg-[url('/src/assets/technology/background-technology-desktop.jpg')]">
				<div className="pageTitle">
					<Title number="03" title="Space launch 101" />
				</div>
				<div className="xl:flex xl:flex-row-reverse">
					<div>
						<div className="h-[170px] md:h-[310px] w-screen mt-[32px] md:mt-[60px] xl:hidden">
							{" "}
							<Image
								src={getAsset(
									props.technology[index].images.landscape
								)}
							/>
						</div>
						<div className="hidden xl:block h-[527px] w-[515px] mt-[26px]">
							{" "}
							<Image
								src={getAsset(
									props.technology[index].images.landscape
								)}
							/>
						</div>
					</div>
					<div className="xl:mr-[130px]">
						<div className="flex flex-col md:flex-col-reverse xl:text-left xl:items-start xl:mt-[137px]">
							<p className="mt-[34px] uppercase subheading2 xl:mt-0">
								The terminology
							</p>
							<div className="flex gap-x-[12px] justify-center items-center mt-[9px] md:mt-[56px] md:gap-x-[16px] xl:flex-col xl:absolute xl:top-[332px] xl:left-[165px] xl:gap-y-[32px]">
								{props.technology.map((x, i) => (
									<Circle
										number={i + 1}
										onClick={() => setIndex(i)}
										isSelect={() => index == i}
									/>
								))}
							</div>
						</div>
						<div className="mt-[26px] px-[24px] md:mt-[44px] md:px-[155px] xl:px-0 xl:text-left xl:w-[470px]">
							{" "}
							<Instruction technology={props.technology[index]} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Technology;
