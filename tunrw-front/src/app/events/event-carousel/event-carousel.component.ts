import { Component, OnInit, Input } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "event-carousel",
  templateUrl: "./event-carousel.component.html",
  styleUrls: ["./event-carousel.component.scss"]
})
export class EventCarouselComponent implements OnInit {
  @Input() slides;


  constructor() {}
  ngOnInit() {

  }


}
