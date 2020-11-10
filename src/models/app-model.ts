
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
    numPlayers: string,
    rating: number,
    price: number,
    type: string,
    img: string,
}

export interface Event extends Identifiable{
    nom: string,
    img?: string,
    desc: string,
    startDate: Date,
    endDate: Date,
    adress: Adress,
    gameId: number,
}

export interface Adress {
    name: string,
    city: string,
    zip: number,
    country: string,
    lon: number,
    lat: number,
}