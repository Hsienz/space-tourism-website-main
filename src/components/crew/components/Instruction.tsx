import { CrewType } from "../../../data/type"

type InstructionPropType = {
    crew: CrewType
}
const Instruction = ( props:InstructionPropType ) => {
    return (
        <div>
            <h3>{props.crew.role}</h3>
            <h2>{props.crew.name}</h2>
            <p>{props.crew.bio}</p>
        </div>
    )
}

export default Instruction