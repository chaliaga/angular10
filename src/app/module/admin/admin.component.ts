import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goDish(): void {
    this.router.navigateByUrl('./dish').then(r => {});
  }

  goCategories(): void {
    this.router.navigateByUrl('./category').then(r => {} );
  }
}
