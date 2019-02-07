import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GameService} from "./game.service";
import { BackgroundComponent } from './background/background.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { RectangleComponent } from './game-page/rectangle/rectangle.component';
import { ResultPopupComponent } from './result-popup/result-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    WelcomePageComponent,
    GamePageComponent,
    RectangleComponent,
    ResultPopupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
