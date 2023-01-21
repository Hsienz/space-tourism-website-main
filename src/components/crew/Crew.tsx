import { useState } from "react"
import { CrewType } from "../../data/type"
import Instruction from "./components/Instruction"
import Dot from "../Dot/Dot"
import Image,{getAsset} from "../image/Image"

type CrewPropType = {
    crew: CrewType[],
}

const Crew = (props:CrewPropType) => {
    const [index, setIndex] = useState(0)
    return (
        <div>
            <Instruction crew={props.crew[index]}/>
            {props.crew.map((x,i) => <Dot key={x.name} onClick={()=>setIndex(i)}/>)}
            <Image src={getAsset(props.crew[index].images.png)}/>
        </div>
    )

}
export default Crew