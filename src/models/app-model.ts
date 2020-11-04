
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
    price: number,
    type: string,
    img: string,
}

export interface Evenement extends Identifiable{
    nom: string,
    date: Date,
}