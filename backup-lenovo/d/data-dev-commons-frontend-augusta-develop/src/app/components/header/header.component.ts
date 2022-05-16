import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'front-zonas';

  constructor(private route: ActivatedRoute, private router: Router) { }
  data: any;

  ngOnInit(): void { }

  onLogin(): void {
    const url = `${environment.cognitoURL}/oauth2/authorize?response_type=code&client_id=${environment.clientId}&redirect_uri=${environment.redirectURL}&scope=openid`;
    console.log('url', url);
    this.data = this.route.snapshot.data;
    if (this.data != null && this.data.access != null) {
      if (this.data.access.error != null) {
        console.log('error');
      } else {
        this.router.navigate(['login']);
      }
    }
    else{
      window.location.assign(url);
    }
  }
}
