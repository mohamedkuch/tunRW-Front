import { Component, ViewChild, ElementRef, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostListener('window:scroll', ['$event']) 
  doSomething(event) {
  }
  ngOnInit(): void {
  }

}
