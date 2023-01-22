import { CrewType } from "../../../data/type"

type InstructionPropType = {
    crew: CrewType
}
const Instruction = ( props:InstructionPropType ) => {
    return (
        <div className="md:px-[116px]">
            <h5 className="uppercase">{props.crew.role}</h5>
            <h4 className="uppercase mt-[8px]">{props.crew.name}</h4>
            <p className="mt-[16px]">{props.crew.bio}</p>
        </div>
    )
}

export default Instruction