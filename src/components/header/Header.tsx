import icon from "../../assets/shared/logo.svg";
import iconHamburger from "../../assets/shared/icon-hamburger.svg";
import iconClose from "../../assets/shared/icon-close.svg";
import { useState } from "react";
import Navbar, { NavbarPropType } from "../navbar/Narbar";
type HeaderPropType = {
	index: number,
	setIndex: (index: number) => void;
};
const Header = (props: HeaderPropType) => {
	const [toggleMenu, setToggleMenu] = useState(false);
	return (
		<div className="flex justify-between absolute z-10 w-full px-[24px] pt-[24px] items-center">
			<button onClick={() => props.setIndex(0)}>
				{" "}
				<img src={icon} alt="" />
			</button>
			<hr className="hidden xl:block border-White border-t-2 w-[473px] absolute left-[167px] z-10" />
			<button
				className="z-10 md:hidden"
				onClick={() => setToggleMenu(!toggleMenu)}
			>
				{" "}
				<img src={toggleMenu ? iconClose : iconHamburger} alt="" />
			</button>
			<div
				className={`absolute top-0 right-0 ${
					toggleMenu ? "" : "hidden"
				} w-[254px] h-screen md:!block md:w-[450px] md:h-[96px] xl:w-[830px]`}
			>
				{" "}
				<Navbar
					index={props.index}
					setIndex={props.setIndex}
					close={() => setToggleMenu(false)}
				/>
			</div>
		</div>
	);
};

export default Header;
