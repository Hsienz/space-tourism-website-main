let assets : any = import.meta.glob('/src/assets/{crew,technology,destination}/*', {eager:true})

export type ImagePropType = {
    src: string,
}

console.log(assets)

const getAsset = ( s: string ) => {
    return assets[`/src/${s.slice(2)}`].default
}

const Image = (props:ImagePropType) => {
    return (
        <div>
            <img src={props.src} alt="" />
        </div>
    )
}

export default Image
export {getAsset}