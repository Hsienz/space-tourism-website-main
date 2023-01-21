import { DestinationType } from "../../../data/type";

export type InstructionPropType = {
    destination: DestinationType,
};
const Instruction = (props: InstructionPropType) => {
	return (
		<div className="px-[24px]">
			<h3 className="uppercase">{props.destination.name}</h3>
			<p>{props.destination.description}</p>
            <hr className="my-[32px] border-[#383B4B]"/>
            <div className="flex flex-col gap-y-[32px] items-center">
                <div className="flex flex-col gap-y-[12px]">
                    <p className="subheading2 uppercase">Avg. distance</p>
                    <p className="subheading1 uppercase">{props.destination.distance}</p>
                </div>
                <div className="flex flex-col gap-y-[12px]">
                    <p className="subheading2 uppercase">Est. travel time</p>
                    <p className="subheading1 uppercase">{props.destination.travel}</p>
                </div>
            </div>
		</div>
	);
};

export default Instruction;
