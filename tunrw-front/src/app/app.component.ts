import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild("owlCarousel", { static: false }) owlCarousel: ElementRef;

  title = 'tunrw-front';
  menuExpandFlag = false;

  ngOnInit(): void {
  }


  onMenuClick() {
    this.menuExpandFlag = !this.menuExpandFlag;
  }
  onFBClick() {
    window.open("https://www.facebook.com/TunRW.ev/", "_blank");
    this.owlCarousel.nativeElement.owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    });

  }
}
