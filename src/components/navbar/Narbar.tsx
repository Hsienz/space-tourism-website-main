import Tag, {TagPropType} from "../tag/Tag"
const tags = [
    {
        title: "Home",
    },
    {
        title: "Destination",
    },
    {
        title: "Crew",
    },
    {
        title: "Technology",
    },
]
const Navbar = (props:{setIndex:(index:number)=>void}) => {
    return (
        <div className="flex gap-x-4">
            {tags.map( (x,i)=> <Tag key={x.title} {...x} onClick={()=>props.setIndex(i)} />)}           
        </div>
    )
}
export default Navbar