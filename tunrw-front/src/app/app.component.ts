import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  HostListener,
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  @ViewChild("cluster", { static: false }) cluster: ElementRef;

  @HostListener("window:scroll", ["$event"])
  doSomething(event) {
    console.log("#", window.scrollY);

    for (
      let index = 0;
      index < this.cluster.nativeElement.children.length;
      index++
    ) {
      const element = this.cluster.nativeElement.children[index];
      let navTeam = document.getElementById("navbar-menu").children;

      if (window.scrollY > element.offsetTop)
        navTeam[index].classList.add("active");

      if (window.scrollY > element.offsetTop + element.children[0].clientHeight)
        navTeam[index].classList.remove("active");

      if (window.scrollY < element.offsetTop && index != 0)
        navTeam[index].classList.remove("active");

    }

  }

  constructor() {}
  ngOnInit(): void {}
}
