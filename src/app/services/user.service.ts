import { Injectable } from "@angular/core";

export interface User {
    id: string,
    name: string,
    surname: string,
    phoneNumber: string,
    email: string,
    address: string,
    password: string,
    favouriteGenres: string[],
    basket: Array<{production: string, airsAt: string, status: "reserved" | "watched" | "cancelled", amount: number}>
}

@Injectable()
export class UserService {

}