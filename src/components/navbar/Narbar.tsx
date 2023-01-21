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
	setIndex: (index: number) => void;
};
const Navbar = (props: NavbarPropType) => {
	return (
		<div className="flex gap-x-4 flex-col md:flex-row text-left">
			<div className="background bg-[rgba(255,255,255,0.04)] backdrop-blur-[40.7742px] w-[254px]"></div>
			<div className="flex flex-col mt-[118px] gap-y-[32px] ml-[61px]">
				{tags.map((x, i) => (
					<NavTag
						key={x.title}
						{...x}
						onClick={() => props.setIndex(i)}
					/>
				))}
			</div>
		</div>
	);
};
export default Navbar;
