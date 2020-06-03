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
  public slides = [
    { src: "https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1115&q=80", name: "Mohamed kechaou", position: "CEO" },
    { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80", name: "Lorem kechaou", position: "Poster" },
    { src: "https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=581&q=80", name: "Test Omar", position: "Manager" },
    { src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80", name: "Hamza kechaou", position: "CTO" }
  ];

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
