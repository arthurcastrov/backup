import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
providedIn: 'root'
})

export class JwtTokenService {
    constructor(private httpClient: HttpClient, private jwtService: JwtHelperService) { }

    decodedToken(token: string){
      return this.jwtService.decodeToken(token);
    }
}

