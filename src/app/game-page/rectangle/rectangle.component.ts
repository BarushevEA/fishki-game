import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {GameService} from '../../game.service';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RectangleComponent implements OnInit {
  state = STATE;
  currentState: STATE;

  @Input() rectangleNumber;

  constructor(public CDR: ChangeDetectorRef,
              public gameService: GameService) {
  }

  ngOnInit() {
    this.currentState = STATE.BLUE;
    this.gameService.addRectangle(this);
  }

  go() {
    this.currentState = STATE.YELLOW;
    this.CDR.detectChanges();
  }

  playerClick() {
    if (this.currentState === STATE.YELLOW) {
      this.gameService.incrementPlayerCounts();
      this.currentState = STATE.GREEN;
      this.CDR.detectChanges();
    }
  }
}

enum STATE {
  YELLOW = 'YELLOW',
  BLUE = 'BLUE',
  RED = 'RED',
  GREEN = 'GREEN'
}
