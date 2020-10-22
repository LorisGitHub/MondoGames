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
    nom: string,
    prenom: string,
    ddn: Date,
}

export interface Game extends Identifiable{
    nom: string,
    price: number,
    type: string,
}

export interface Evenement extends Identifiable{
    nom: string,
    date: Date,
}