import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuExpandFlag = false;

  constructor() { }

  ngOnInit() {
  }

  onMenuClick() {
    this.menuExpandFlag = !this.menuExpandFlag;
  }

}
