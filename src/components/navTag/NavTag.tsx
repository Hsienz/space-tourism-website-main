export type NavTagPropType = {
    number: string,
    title:string,
    onClick: () => void,
    isSelect: () => boolean,
}
const NavTag = (props:NavTagPropType ) => {
    return (
        <button onClick={()=>props.onClick()} className={`border-b-2 border-white border-opacity-0 hover:border-opacity-50 transition-all ${props.isSelect() ? "border-opacity-100" : "" }`}>
            <p className="navText text-left uppercase"><span className="font-bold md:hidden xl:inline">{props.number}</span> {props.title}</p>
        </button>
    )
}
export default NavTag