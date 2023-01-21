export type NavTagPropType = {
    number: string,
    title:string,
    onClick: () => void,
}
const NavTag = (props:NavTagPropType ) => {
    return (
        <button onClick={()=>props.onClick()}>
            <p className="navText text-left uppercase"><span className="font-bold">{props.number}</span> {props.title}</p>
        </button>
    )
}
export default NavTag