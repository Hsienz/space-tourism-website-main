export type CirclePropType = {
    number: number,
    onClick: () => void,
}
const Circle = (props:CirclePropType ) => {
    return (
        <button className="h-5 aspect-square rounded-full bg-black" onClick={()=>props.onClick()}>
            <p>{props.number}</p>
        </button>
    )
}
export default Circle