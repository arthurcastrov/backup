import { Component, OnInit } from '@angular/core';
import {JwtTokenService} from '../../services/jwt.service';
import {DecodedData} from '../../interfaces/decoded-data';
import {AwsCognitoService} from '../../services/aws-cognito.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string
  lastname: string
  constructor(private jwtService: JwtTokenService) { }

  ngOnInit(): void {
    const codeData: DecodedData = this.jwtService.decodedToken(localStorage.getItem('id_token'));
    console.log('email', codeData.email);
    this.name = codeData.given_name;
    this.lastname = codeData.family_name;
    // console.log('token: ', localStorage.getItem('token'));
    // console.log('id_token: ', localStorage.getItem('id_token'));
    // console.log('decoded_data', JSON.stringify(this.jwtService.decodedToken(localStorage.getItem('id_token'))));
  }
  // logout():void{
  //   return this.AwsCognitoService.logoutUserFromCognito();
  // }
}
