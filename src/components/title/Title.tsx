export type TitlePropType = {
    number: string,
    title: string,
}
const Title = ( props:TitlePropType ) => {
    return (
        <div>
            <p className="subheading1 uppercase font-Barlow"><span className="font-bold opacity-25">{props.number}</span> {props.title}</p>
        </div>
    )
}

export default Title