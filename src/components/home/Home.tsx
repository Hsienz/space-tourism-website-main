import PreviousMap from "postcss/lib/previous-map";

type HomePropType = {
	onClick: () => void;
};
const Home = (props: HomePropType) => {
	return (
		<div className="flex flex-col items-center xl:flex-row xl:p-[165px] xl:justify-between xl:items-start">
			<div className="background bg-[url('/src/assets/home/background-home-mobile.jpg')] md:bg-[url('/src/assets/home/background-home-tablet.jpg')] xl:bg-[url('/src/assets/home/background-home-desktop.jpg')]">
				<div className="xl:px-[165px] flex flex-col xl:flex-row xl:justify-between">
					<div className="mt-[112px] md:mt-[202px] xl:mt-[387px] xl:w-[450px] xl:p-0 flex flex-col gap-y-[16px] md:gap-y-[24px] items-center xl:items-start px-[24px] md:px-[156px]">
						<h5 className="uppercase">So, you want to travel to</h5>
						<h1 className="text-White md:heading1 uppercase">
							Space
						</h1>
						<p className="text-center xl:text-left">
							Let’s face it; if you want to go to space, you might
							as well genuinely go to outer space and not hover
							kind of on the edge of it. Well sit back, and relax
							because we’ll give you a truly out of this world
							experience!
						</p>
					</div>

					<button
						onClick={() => props.onClick()}
						className="self-center h-[150px] md:h-[242px] mt-[81px] xl:mt-[495px] md:mt-[156px] aspect-square rounded-full bg-white text-blue heading4 transition-all hover:shadow-[0_0_0_88px_rgba(255,255,255,0.1)]"
					>
						Explore
					</button>
				</div>
			</div>
		</div>
	);
};
export default Home;
