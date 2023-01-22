export type TagPropType = {
    title:string,
    onClick: () => void,
    isSelect: () => boolean
}
const Tag = (props:TagPropType ) => {
    return (
        <button onClick={()=>props.onClick()} className={`text-purple border-b-2 border-white border-opacity-0 hover:border-opacity-50 transition-all ${props.isSelect() ? "border-opacity-100 text-white" : "" }`}>
            <p className="subheading2">{props.title}</p>
        </button>
    )
}
export default Tag