import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent implements OnInit {
  @Input() slide;

  constructor() { }

  ngOnInit() {
  }

}
