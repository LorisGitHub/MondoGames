
export interface Identifiable {
    id?: number,
    creation?: Date,
}

export interface User extends Identifiable{
    admin: boolean,
    userName: string,
    firstName: string,
    lastName: string,
    country?: string,
    online: boolean,
    score: number,
    birthdate: Date,
    profilePicture: string,
    friends: number[],
    guild?: number,
    address?: Adress,
}

export interface Game extends Identifiable{
    name: string,
    description?: string,
    numPlayers: string,
    rating: number,
    price: number,
    type: string,
    img: string,
    releaseDate: Date,
}

export interface Event extends Identifiable{
    name: string,
    image?: string,
    description: string,
    startDate: Date,
    endDate: Date,
    address: Adress,
    gameId: number,
    userId: number,
}

export interface Adress {
    name: string,
    city: string,
    zip: number,
    country: string,
    lon: number,
    lat: number,
}