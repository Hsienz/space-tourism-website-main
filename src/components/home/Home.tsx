const Home = () => {
	return (
		<div className="flex flex-col items-center bg-[url('/src/assets/home/background-home-mobile.jpg')] bg-no-repeat bg-cover w-screen min-h-screen absolute top-0 left-0">
			<div className="mt-[112px] flex flex-col gap-y-[16px] items-center px-[24px]">
				<p className="navText uppercase">So, you want to travel to</p>
				<h1 className="text-White md:heading1 uppercase">
					Space
				</h1>
				<p className="text-center">
					Let’s face it; if you want to go to space, you might as well
					genuinely go to outer space and not hover kind of on the
					edge of it. Well sit back, and relax because we’ll give you
					a truly out of this world experience!
				</p>
			</div>

			<button className="h-[150px] mt-[81px] aspect-square rounded-full bg-white text-blue heading4">
				Explore
			</button>
		</div>
	);
};
export default Home;
