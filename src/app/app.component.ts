import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GameService} from "./game.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(public CDR: ChangeDetectorRef,
              public gameService: GameService) {
    gameService.setAppCdr(CDR);
  }

  ngOnInit(): void {
    this.gameService.start();
  }
}
