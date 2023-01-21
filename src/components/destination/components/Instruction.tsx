import { DestinationType } from "../../../data/type";

export type InstructionPropType = {
    destination: DestinationType,
};
const Instruction = (props: InstructionPropType) => {
	return (
		<div>
			<h2>{props.destination.name}</h2>
			<p>{props.destination.description}</p>
            <hr />
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <p className="uppercase">Avg. distance</p>
                    <p>{props.destination.distance}</p>
                </div>
                <div className="flex flex-col">
                    <p className="uppercase">Est. travel time</p>
                    <p>{props.destination.travel}</p>
                </div>
            </div>
		</div>
	);
};

export default Instruction;
