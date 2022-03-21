import { AuthenticationService } from './../../services/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  navigate(category: any) {
    this.router.navigate(['/todoItems/listItems', category])
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login'])
    })
  }

}
