import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';

import { environment } from 'src/environments/environment';

export interface SignInRequest {
    password: string;
    username: string;
}

// TODO move to interceptor
const baseUrl: string = environment.baseUrl;

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {}

    public signIn(signInData: SignInRequest): Observable<string> {
        // TODO move to interceptor
        const headers = new HttpHeaders({
            'x-api-key': 'JlR2Q5vf8k2XIPkk4pDAN0RtxTASVZ6lxlz7Vr70',
        });
        return this.http
            .post<{ accessToken: string }>(
                `${baseUrl}/auth/signin`,
                signInData,
                { headers }
            )
            .pipe(
                map(
                    (response: { accessToken: string }) => response.accessToken
                ),
                catchError((e: Error) => {
                    console.log(e);
                    return 'error';
                })
            );
    }
}
