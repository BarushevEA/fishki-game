import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GameService} from '../game.service';
import {RectangleComponent} from './rectangle/rectangle.component';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  isPlayed = false;

  constructor(public CDR: ChangeDetectorRef,
              public gameService: GameService) {
    gameService.setGameCdr(CDR);
  }

  ngOnInit() {
  }

  initRectangles() {
    const rectangles = [];
    for (let i = 0; i < this.gameService.countOfRectangles; i++) {
      rectangles.push('');
    }
    return rectangles;
  }

  play(delay) {
    if (!this.isPlayed) {
      const num = parseInt(delay, 10);
      if (typeof (num) !== 'number' || !num || num < 1) {
        alert('Not a valid');
      } else {
        this.gameService.delay = num;
        this.gameService.gameLoop();
        this.isPlayed = true;
      }
    }
  }
}
