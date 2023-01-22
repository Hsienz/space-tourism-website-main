import { DestinationType } from "../../../data/type";

export type InstructionPropType = {
    destination: DestinationType,
};
const Instruction = (props: InstructionPropType) => {
	return (
		<div className="px-[24px] md:px-[96px] xl:pl-0">
			<h3 className="uppercase">{props.destination.name}</h3>
			<p>{props.destination.description}</p>
            <hr className="my-[32px] border-[#383B4B] md:my-[49px] border-t-2"/>
            <div className="flex flex-col gap-y-[32px] items-center md:flex-row md:justify-center xl:justify-start md:gap-x-[48px]">
                <div className="flex flex-col gap-y-[12px] items-center xl:items-start">
                    <p className="subheading2 uppercase">Avg. distance</p>
                    <p className="subheading1 uppercase">{props.destination.distance}</p>
                </div>
                <div className="flex flex-col gap-y-[12px] items-center xl:items-start">
                    <p className="subheading2 uppercase">Est. travel time</p>
                    <p className="subheading1 uppercase">{props.destination.travel}</p>
                </div>
            </div>
		</div>
	);
};

export default Instruction;
