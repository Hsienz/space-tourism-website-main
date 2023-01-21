import { useState } from "react"
import Image,{ImagePropType, getAsset} from "../image/Image"
import Instruction,{InstructionPropType} from "./components/Instruction"
import Tag from "../tag/Tag"
import {DestinationType} from '../../data/type'

export type DestinationPropType = {
    destinations:DestinationType[]
}

const Destination = (props:DestinationPropType) => {
    const [index, setIndex] = useState(0)
    return (
        <div>
            <Image src={getAsset(props.destinations[index].images.png)}/>
            {props.destinations.map((x,i) => <Tag key={x.name} title={x.name} onClick={()=>setIndex(i)}/>)}
            <Instruction destination={props.destinations[index]}/>
        </div>
    )

}
export default Destination