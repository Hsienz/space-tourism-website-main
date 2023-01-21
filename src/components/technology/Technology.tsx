import { useState } from "react"
import { TechnologyType } from "../../data/type"
import Image, {getAsset} from "../image/Image"
import Circle from "../circle/Circle"
import Instruction from "./componenets/Instruction"

type TechnologyPropType = {
    technology: TechnologyType[],
}
const Technology = (props: TechnologyPropType ) => {
    const [index, setIndex] = useState(0)
    return (
        <div>
            <Image src={getAsset(props.technology[index].images.landscape)}/>
            {props.technology.map((x,i)=><Circle number={i+1} onClick={()=>setIndex(i)}/>)}
            <Instruction technology={props.technology[index]}/>
        </div>
    )

}
export default Technology