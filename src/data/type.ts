export type SingleImageSetType = {
    png: string,
    webp: string,
}

export type MultipleImageSetType = {
    portrait: string,
    landscape: string,
}

type BaseType = {
    name: string,
}

export type TechnologyType = BaseType & {
    images: MultipleImageSetType,
    description: string,
}

export type DestinationType = BaseType & {
    images:SingleImageSetType,
    distance: string,
    travel: string,
    description: string,
}

export type CrewType = BaseType & {
    images: SingleImageSetType,
    role: string,
    bio: string,
}