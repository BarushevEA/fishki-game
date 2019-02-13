import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamePageComponent implements OnInit {
  isPlayed = false;

  constructor(public gameService: GameService) {
  }

  ngOnInit() {
  }

  initNumbersArray() {
    const numbersOfRectangle = [];
    for (let i = 0; i < this.gameService.countOfRectangles; i++) {
      numbersOfRectangle.push(i + 1);
    }
    return numbersOfRectangle;
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
