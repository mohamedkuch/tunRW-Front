import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tunrw-front';
  menuExpandFlag = false;

  onMenuClick(){
    this.menuExpandFlag = !this.menuExpandFlag;
  }
  onFBClick(){
    window.open("https://www.facebook.com/TunRW.ev/", "_blank");
  }
}
