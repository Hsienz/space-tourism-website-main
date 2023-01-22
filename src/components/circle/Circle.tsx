export type CirclePropType = {
    number: number,
    onClick: () => void,
    isSelect: () => boolean
}
const Circle = (props:CirclePropType ) => {
    return (
        <button className={`h-[40px] md:h-[60px] xl:h-[80px] aspect-square rounded-full bg-transparent border-white border-[1px] text-white transition-all font-Bellefair ${props.isSelect() ? "text-blue bg-white border-blue" : ""}`} onClick={()=>props.onClick()}>
            <p>{props.number}</p>
        </button>
    )
}
export default Circle