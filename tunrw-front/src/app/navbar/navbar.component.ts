import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('navbarAnimation', [
      state('open', style({ opacity: 1, height: '88px' })),
      state('closed', style({ opacity: 0, height: '0px' })),
      transition('open <=> closed', [animate('500ms ease-in-out')] )
    ]),

    trigger('navbarColorAnimation', [
      state('open', style({ color: '#232323' })),
      state('closed', style({  color: 'white' })),
      transition('open <=> closed', [animate('500ms ease-in-out')] )
    ]),

    trigger('navbarLogoColorAnimation', [
      state('open', style({ background : '#232323' })),
      state('closed', style({  background: 'white' })),
      transition('open <=> closed', [animate('500ms ease-in-out')] )
    ]),

    
  ]
})
export class NavbarComponent implements OnInit {
  @ViewChild('navList' , {static: false}) navList: ElementRef; 
  navbarTrigger = false;
  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    // console.debug("Scroll Event", document.body.scrollTop);
    // see András Szepesházi's comment below
    console.log("Scroll Event", window.pageYOffset);
    if (window.pageYOffset > 50){
      this.navbarTrigger = true;
      this.navList.nativeElement.classList.remove('navbar-dark');
      this.navList.nativeElement.classList.add('navbar-light');
    }
    else{
      this.navbarTrigger = false;
      this.navList.nativeElement.classList.remove('navbar-light');
      this.navList.nativeElement.classList.add('navbar-dark');
    }

  }
  constructor() { }

  ngOnInit() {
  }


}
