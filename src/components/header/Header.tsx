import icon from "../../assets/shared/logo.svg";
import iconHamburger from "../../assets/shared/icon-hamburger.svg";

const Header = () => {
	return (
		<div className="flex justify-between absolute z-10 w-full px-[24px] pt-[24px]">
			<button>
				{" "}
				<img src={icon} alt="" />
			</button>
			<button>
				{" "}
				<img src={iconHamburger} alt="" />
			</button>
		</div>
	);
};

export default Header