let assets : any = import.meta.glob('/src/assets/*/*', {eager:true})

export type ImagePropType = {
    src: string,
}

console.log(assets)

const getAsset = ( s: string ) => {
    return assets[`/src/${s.slice(2)}`].default
}

const Image = (props:ImagePropType) => {
    return (
        <div className="h-full">
            <img className="h-full" src={props.src} alt="" />
        </div>
    )
}

export default Image
export {getAsset}