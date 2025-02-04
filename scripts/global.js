let imgStartScreen;
let imgGround;
let imgFront;
let imgMiddle;
let imgBack;
let imgSky;

let imgGameOver;
let imgLife;
let fontTitle;
let cartridge;

let imgWitch;
let imgWitchIntro;
let imgWitchVictory;

let imgWolf;
let imgWolfIntro;
let imgWolfVictory;
let imgWolfDefeat;

let imgPoring;
let imgWinged;
let imgTroll;

let introButton;
let startButton;
let againButton;

let startScreen;
let introScreen;
let gameplay;
let gameOverScreen;
let theEndScreen
let status;
let currentStatus = 'startScreen';

let scenario1;
let scenario2;
let scenario3;
let scenario4;
let scenario5;

let lives;
let score;

let witch;
let poring;
let winged;
let troll;
let wolf;

let soundtrack;
let jumpSound;
let successSound;
let collideSound;
let victorySound;
let gameOverSound;

const matrixWitch = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
]
const matrixPoring = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
]
const matrixTroll = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]
const matrixWinged = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750]
]

const matrixWolf = [
  [140, 200],
  [620, 200],
  [1100, 200],
  [1580, 200],
  [2060, 200],
  [140, 682],
  [620, 682],
  [1100, 682],
  [1580, 682],
  [2060, 682],
  [140, 1164],
  [620, 1164],
  [1100, 1164],
  [1580, 1164],
]

const enemies = []