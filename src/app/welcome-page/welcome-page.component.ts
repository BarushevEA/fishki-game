import {Component, OnInit} from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {


  constructor(public gameService: GameService) {
  }

  ngOnInit() {
  }

  getNumberOfLayers() {
    const layers = [];

    for (let i = 0; i < 9; i++) {
      layers.push(i);
    }

    return layers;
  }
}
