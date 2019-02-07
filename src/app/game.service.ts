import {ChangeDetectorRef, Injectable} from '@angular/core';
import {RectangleComponent} from "./game-page/rectangle/rectangle.component";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  pageType = PAGES;
  currentPage: PAGES;
  public appName = 'Fishki';
  appCdr: ChangeDetectorRef;
  gameCdr: ChangeDetectorRef;
  rectangles: RectangleComponent[];
  delay = 1000;
  speedDelay = 500;
  playerCounts: number;
  computerCounts: number;
  countOfRectangles = 100;
  activeRectangle;
  winCount = 10;
  isResultShow;

  constructor() {
  }

  setAppCdr(CDR: ChangeDetectorRef) {
    this.appCdr = CDR;
  }

  setGameCdr(CDR: ChangeDetectorRef) {
    this.gameCdr = CDR;
  }

  start() {
    this.rectangles = [];
    this.playerCounts = 0;
    this.computerCounts = 0;
    this.activeRectangle = 0;
    this.isResultShow = false;
    setTimeout(() => {
      this.showWelcome();
    }, 1000);
    setTimeout(() => {
      this.clearPage();
    }, 10000);
    setTimeout(() => {
      this.showGame();
    }, 11000);
  }

  private clearPage() {
    this.currentPage = null;
    this.appCdr.detectChanges();
  }

  private showWelcome() {
    this.currentPage = PAGES.WELCOME;
    this.appCdr.detectChanges();
  }

  private showGame() {
    this.currentPage = PAGES.GAME;
    this.appCdr.detectChanges();
  }

  private showResult() {
    this.isResultShow = true;
    this.appCdr.detectChanges();
  }

  public addRectangle(component: RectangleComponent) {
    this.rectangles.push(component);
  }

  incrementPlayerCounts() {
    this.playerCounts++;
    this.appCdr.detectChanges();
    this.gameCdr.detectChanges();
    this.gameLoop();
  }

  incrementComputerCounts() {
    this.computerCounts++;
    this.appCdr.detectChanges();
    this.gameCdr.detectChanges();
    this.gameLoop();
  }

  goFreeRectangle() {
    let index = -1;
    while (index === -1) {
      let count = Math.round(Math.random() * 101);
      if (this.rectangles[count].currentState === this.rectangles[count].state.BLUE) {
        index = count
      }
      const rectangle = this.rectangles[index];
      const go = () => {
        rectangle.go();
        const computerStep = () => {
          if (rectangle.currentState == rectangle.state.YELLOW) {
            this.incrementComputerCounts();
            rectangle.currentState = rectangle.state.RED;
            rectangle.CDR.detectChanges();
          }
        };
        setTimeout(computerStep.bind(this), this.delay);
      };
      setTimeout(go.bind(this), this.speedDelay);
      this.gameCdr.detectChanges();
    }
  }

  gameLoop() {
    if (this.playerCounts === this.winCount || this.computerCounts === this.winCount) {
      this.showResult();
    } else {
      this.goFreeRectangle();
    }
  }
}

enum PAGES {
  WELCOME = 'WELCOME',
  SETTINGS = 'SETTINGS',
  GAME = 'GAME',
  GOODBYE = 'GOODBYE'
}
