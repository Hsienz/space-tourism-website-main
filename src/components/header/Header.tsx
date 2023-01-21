import icon from "../../assets/shared/logo.svg";
import iconHamburger from "../../assets/shared/icon-hamburger.svg";
import iconClose from "../../assets/shared/icon-close.svg";
import { useState } from "react";
import Navbar, { NavbarPropType } from "../navbar/Narbar";
type HeaderPropType = {
	setIndex: (index: number) => void;
};
const Header = (props: HeaderPropType) => {
	const [toggleMenu, setToggleMenu] = useState(false);
	return (
		<div className="flex justify-between absolute z-10 w-full px-[24px] pt-[24px]">
			<button>
				{" "}
				<img src={icon} alt="" />
			</button>
			<button className="z-10" onClick={() => setToggleMenu(!toggleMenu)}>
				{" "}
				<img src={toggleMenu ? iconClose : iconHamburger} alt="" />
			</button>
			{toggleMenu && (
				<div className="absolute top-0 right-0 w-[254px]">
					{" "}
					<Navbar
						setIndex={props.setIndex}
					/>
				</div>
			)}
		</div>
	);
};

export default Header;
