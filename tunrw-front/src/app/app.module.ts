import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './team/team.component';
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { EventsComponent } from './events/events.component';
import { EventCarouselComponent } from './events/event-carousel/event-carousel.component';
import { ProjectsComponent } from './projects/projects.component';
import { SingleProjectComponent } from './projects/single-project/single-project.component';

export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { direction: Hammer.DIRECTION_ALL }
  };
}


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavbarComponent,
    AboutComponent,
    ServiceComponent,
    TeamComponent,
    EventsComponent,
    EventCarouselComponent,
    ProjectsComponent,
    SingleProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
