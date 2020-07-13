import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projects = [
    { src: "https://images.pexels.com/photos/1758531/pexels-photo-1758531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", name: "Mohamed kechaou", description: "CEO" },
    { src: "https://images.pexels.com/photos/1130847/pexels-photo-1130847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", name: "Lorem kechaou", description: "Poster" },
    { src: "https://images.pexels.com/photos/1772973/pexels-photo-1772973.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", name: "Test Omar", description: "Manager" },
    { src: "https://images.pexels.com/photos/462055/pexels-photo-462055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", name: "Hamza kechaou", position: "CTO" }
  ];

  constructor() { }

  ngOnInit() {
    
  }

}
