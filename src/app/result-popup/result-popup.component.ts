import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";

@Component({
  selector: 'app-result-popup',
  templateUrl: './result-popup.component.html',
  styleUrls: ['./result-popup.component.scss']
})
export class ResultPopupComponent implements OnInit {

  constructor(public gameService: GameService) { }

  ngOnInit() {
  }

}
