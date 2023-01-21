export type DotPropType = {
    onClick: () => void,
}
const Dot = (props:DotPropType ) => {
    return (
        <button className="h-[10px] opacity-[.17] aspect-square rounded-full bg-black" onClick={()=>props.onClick()}>
            
        </button>
    )
}
export default Dot