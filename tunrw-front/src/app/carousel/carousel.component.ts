import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate, useAnimation } from '@angular/animations';
import {
  fadeIn,
  fadeOut,
} from "./carousel.animations";
@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimationFirst', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('carouselAnimationSnd', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('400ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('400ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('carouselAnimationThrd', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {
  @Input() slides;
  currentSlide = 0;
  sndSlide = -1;
  thdSlide = -1;

  constructor() {  }
  ngOnInit() {
    console.log(this.slides.length);
    if (this.slides.length > 1) this.sndSlide = 1;
    if (this.slides.length > 2) this.thdSlide = 2;


  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;

    this.sndSlide = this.currentSlide + 1;
    if(this.currentSlide == 2){
      this.thdSlide = 0
    }
    else if(this.currentSlide == 3){
      this.thdSlide = 1;
      this.sndSlide = 0;
    }
    else {
      this.thdSlide = this.currentSlide + 2;
    }


    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;

    this.sndSlide = this.currentSlide + 1;
    if(this.currentSlide == 2){
      this.thdSlide = 0
    }
    else if(this.currentSlide == 3){
      this.thdSlide = 1;
      this.sndSlide = 0;
    }
    else {
      this.thdSlide = this.currentSlide + 2;
    }

    console.log("next clicked, new current slide is: ", this.currentSlide);
  }
  onSwipeLeft(event) {
    console.log("##", event);
    this.onNextClick();
  }
  onSwipeDown(event) {
  }
  onSwipeRight(event) {
    this.onPreviousClick();

  }
}
