
export interface Identifiable {
    id?: number,
    creation?: Date,
}

export interface User extends Identifiable{
    nom: string,
    prenom: string,
    ddn: Date,
}

export interface Friend extends Identifiable{
    pseudo: string,
    nom: string,
    prenom: string,
    country?: string,
    online: boolean,
    point: number,
    ddn: Date,
    pp: string,
}

export interface Game extends Identifiable{
    nom: string,
    desc?: string,
    rating?: number,
    price: number,
    type: string,
    img: string,
}

export interface Event extends Identifiable{
    nom: string,
    desc: string,
    startDate: Date,
    endDate: Date,
    lon: number,
    lat: number,
    gameId: number,
}