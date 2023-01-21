import { TechnologyType } from "../../../data/type"

type InstructionPropType = {
    technology: TechnologyType
}
const Instruction = ( props:InstructionPropType ) => {
    return (
        <div>
            <h3 className="uppercase">{props.technology.name}</h3>
            <p className="mt-[16px]">{props.technology.description}</p>
        </div>
    )    
}

export default Instruction