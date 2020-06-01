import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate, useAnimation } from '@angular/animations';

import {
  scaleIn,
  scaleOut,
} from "./carousel.animations";
@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger("slideAnimation", [
      /* scale */
      transition("void => *", [useAnimation(scaleIn, {params: { time: '500ms' }} )]),
      transition("* => void", [useAnimation(scaleOut, {params: { time: '500ms' }})]),
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
    this.onNextClick();
  }
  onSwipeRight(event) {
    this.onPreviousClick();

  }
}
