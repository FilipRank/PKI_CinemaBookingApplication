import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, forkJoin, Observable } from "rxjs";

export interface User {
    id: string,
    name: string,
    surname: string,
    phoneNumber: string,
    email: string,
    address: string,
    password: string,
    favouriteGenres: string,
    basket: Array<{production: string, airsAt: string, status: string, amount: number}>
}

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  addToCartByUserId(id: number, cartItem: { production: string, airsAt: string, status: string, amount: number }) {
    this.getUserById(id).subscribe((currentUser: User) => {
      currentUser.basket.push(cartItem);
      this.http.put(`http://localhost:3000/users/${id}`, currentUser)
    })

  }

  hasActiveUser() {
    if (sessionStorage.getItem('active')) {
      return true;
    }
    return false
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`http://localhost:3000/users/${id}`);
  }

  registerUser(user: User) {
    return this.http.post<User>("http://localhost:3000/users", user);
  }

  getCurrentUser() {
    if (!sessionStorage.getItem("active")) {
      throw new Error("NO CURRENT USER.")
    }
    return this.http.get<User>(`http://localhost:3000/users/${sessionStorage.getItem('active')}`);
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