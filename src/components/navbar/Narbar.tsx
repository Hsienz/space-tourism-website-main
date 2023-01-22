import NavTag from "../navTag/NavTag";
const tags = [
	{
		number: "00",
		title: "Home",
	},
	{
		number: "01",
		title: "Destination",
	},
	{
		number: "02",
		title: "Crew",
	},
	{
		number: "03",
		title: "Technology",
	},
];
export type NavbarPropType = {
	index: number,
	setIndex: (index: number) => void;
	close: () => void;
};
const Navbar = (props: NavbarPropType) => {
	return (
		<div className="flex gap-x-4 flex-col md:flex-row text-left h-full">
			<div className="bg-[rgba(255,255,255,0.04)] backdrop-blur-[40px] w-full h-full flex md:justify-center md:items-center">
				<div className="flex flex-col mt-[118px] gap-y-[32px] ml-[61px] md:flex-row md:justify-between md:m-0 md:gap-x-[32px] xl:gap-x-[48px]">
					{tags.map((x, i) => (
						<NavTag
							key={x.title}
							{...x}
							onClick={() => {
								props.setIndex(i);
								props.close();
							}}
							isSelect = {() => props.index == i}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
export default Navbar;
