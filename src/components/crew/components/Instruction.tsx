import { CrewType } from "../../../data/type"

type InstructionPropType = {
    crew: CrewType
}
const Instruction = ( props:InstructionPropType ) => {
    return (
        <div>
            <h4 className="uppercase">{props.crew.role}</h4>
            <h5 className="uppercase mt-[8px]">{props.crew.name}</h5>
            <p className="mt-[16px]">{props.crew.bio}</p>
        </div>
    )
}

export default Instruction