export type DotPropType = {
    onClick: () => void,
}
const Dot = (props:DotPropType ) => {
    return (
        <button className="h-2 aspect-square rounded-full bg-black" onClick={()=>props.onClick()}>
            
        </button>
    )
}
export default Dot