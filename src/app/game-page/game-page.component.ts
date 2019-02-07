import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GameService} from "../game.service";

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  rectangles = [];
  isPlayed = false;

  constructor(public CDR: ChangeDetectorRef,
              public gameService: GameService) {
    gameService.setGameCdr(CDR);
  }

  ngOnInit() {
    for (let i = 0; i < this.gameService.countOfRectangles; i++) {
      this.rectangles.push(null)
    }
  }

  play() {
    if (!this.isPlayed) {
      const element = document.getElementById('gameDelay');
      // @ts-ignore
      const num = parseInt(element.value);
      if (typeof(num) != 'number' || !num) {
        alert('Not a Number');
      } else {
        this.gameService.delay = num;
        this.gameService.gameLoop();
        this.isPlayed = true;
      }
    }
  }
}
