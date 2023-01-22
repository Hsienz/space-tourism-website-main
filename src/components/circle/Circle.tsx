export type CirclePropType = {
    number: number,
    onClick: () => void,
}
const Circle = (props:CirclePropType ) => {
    return (
        <button className="h-[40px] md:h-[60px] aspect-square rounded-full bg-transparent border-white border-[1px] text-white font-Bellefair" onClick={()=>props.onClick()}>
            <p>{props.number}</p>
        </button>
    )
}
export default Circle