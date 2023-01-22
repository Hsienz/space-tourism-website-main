export type DotPropType = {
    onClick: () => void,
    isSelect: () => boolean,
}
const Dot = (props:DotPropType ) => {
    return (
        <button className={`h-[10px] opacity-[.17] hover:opacity-50 aspect-square rounded-full bg-white transition-all ${props.isSelect() ? "opacity-100" : ""}`} onClick={()=>props.onClick()}>
            
        </button>
    )
}
export default Dot