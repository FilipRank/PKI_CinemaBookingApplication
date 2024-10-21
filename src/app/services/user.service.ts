import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

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

  hasActiveUser() {
    if (sessionStorage.getItem('active')) {
      return true;
    }
    return false
  }

  getUserById(id: number) {
    return this.http.get<User>(`http://localhost:3000/users/${id}`);
  }

  registerUser(user: User) {
    return this.http.post<User>("http://localhost:3000/users", user);
  }

  getCurrentUser(id: number) {
    if (!sessionStorage.getItem("active")) {
      throw new Error("NO CURRENT USER.")
    }
    return this.http.get<User>(`http://localhost:3000/users/${id}`);
  }

  logoutActiveUser() {
    sessionStorage.removeItem('active');
  }

  async login(email: string, password: string) {
    let response = await fetch(`http://localhost:3000/users?email=${email}&password${password}`);
    let data = await response.json();

    if (data.length === 0) {
      throw new Error("LOGIN FAILED")
    }

    sessionStorage.setItem('active', data[0].id)
  }
}