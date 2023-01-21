import { TechnologyType } from "../../../data/type"

type InstructionPropType = {
    technology: TechnologyType
}
const Instruction = ( props:InstructionPropType ) => {
    return (
        <div>
            <h2>{props.technology.name}</h2>
            <p>{props.technology.description}</p>
        </div>
    )    
}

export default Instruction