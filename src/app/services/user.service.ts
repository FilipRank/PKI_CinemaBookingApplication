import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface User {
    id: string,
    name: string,
    surname: string,
    phoneNumber: string,
    email: string,
    address: string,
    password: string,
    favouriteGenres: string,
    basket: Array<{production: string, airsAt: string, status: "reserved" | "watched" | "cancelled", amount: number}>
}

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  registerUser(user: User) {
    return this.http.post<User>("http://localhost:3000/users", user);
  }
}