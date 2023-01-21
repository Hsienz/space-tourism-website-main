export type TagPropType = {
    title:string,
    onClick: () => void,
}
const Tag = (props:TagPropType ) => {
    return (
        <button onClick={()=>props.onClick()}>
            <p className="subheading2">{props.title}</p>
        </button>
    )
}
export default Tag