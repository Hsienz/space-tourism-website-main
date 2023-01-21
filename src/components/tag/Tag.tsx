export type TagPropType = {
    title:string,
    onClick: () => void,
}
const Tag = (props:TagPropType ) => {
    return (
        <button onClick={()=>props.onClick()}>
            <p>{props.title}</p>
        </button>
    )
}
export default Tag