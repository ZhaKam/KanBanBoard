import { Injectable } from "@angular/core";
import { User } from "../../interfaces";
import { Observable, tap } from "rxjs";
import {HttpClient} from '@angular/common/http'
import { getTokenSourceMapRange, setTokenSourceMapRange } from "typescript";
import { LogOutput } from "concurrently";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private token = null

    constructor(private http: HttpClient){

    }

    register (){}


    login(user: User): Observable<{token: string}> {
        return this.http.post<{token: string}> ('/api/auth/login', user)
            .pipe(
                tap(
                    ({token})=> {
                      localStorage.setItem('auth-token', token)
                      this.setToken(token)
                    }
                )
            )
    }

    setToken(token: string){
        this.token = token
    }

    getToken(): string{
        return this.token
    }

    isauthenticated(): boolean{
        return !!this.token
    }

    LogOutput(){
        this.setToken(null)
        localStorage.clear()
    }
}