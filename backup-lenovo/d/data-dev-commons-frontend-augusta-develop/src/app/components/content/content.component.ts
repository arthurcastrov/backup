import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  title = 'front-zonas';

  constructor(private route: ActivatedRoute, private router: Router) { }
  data: any;

  ngOnInit(): void { }

}
