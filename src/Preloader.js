Number.Preloader = function(game) {
  console.log("%cPreloading my awesome game", "color:white; background:red");

  // Define width and height of the game
  Number.GAME_WIDTH = 800;
  Number.GAME_HEIGHT = 600;
};

Number.Preloader.prototype = {
  init: function () {
    this.add.sprite(0,0, 'game_background');
  },
  
  preload: function () {

    // Set background color and preload image
    this.preloadBg = this.add.sprite(230, 480, 'preloaderBg');
    this.preloadBar = this.add.sprite(230, 480, 'preloaderBar');
    this.load.setPreloadSprite(this.preloadBar);

    this.load.image('back-button', 'img/back-button.png');

    // Load Main menu images
    this.load.image('header','img/header.png');
    
    this.load.image('start-button', 'img/start-button.png');
    this.load.image('highscore-button', 'img/highscore-button.png');
    this.load.image('help-button', 'img/help-button.png');
    
    // Load Game screen images
    //  Load Main simple background image
    this.load.image('background', 'img/background.png');
    this.load.image('pause-button', 'img/pause-button.png');
    this.load.image('play-button', 'img/play-button.png');
    this.load.image('score-image', 'img/score-image.png');
    this.load.image('timer-image', 'img/timer-image.png');
    this.load.image('button', 'img/button.png');

    // Load Help screen images
    this.load.image('help-screen', 'img/help-screen.png');

    // Load High scores images
    this.load.image('highscores-board', 'img/highscores-board.png');

    // Load Score board(Leader board) images
    this.load.image('score-board', 'img/score-board.png');
    this.load.image('playagain-button', 'img/playagain-button.png');
    this.load.image('main-menu-button', 'img/main-menu-button.png');


    // If you have any spritesheets then load them here.
    // this.load.spritesheet('button-audio', 'img/button-audio.png', 35, 35);
  },
  
  create: function () {
    // start the MainMenu state
    this.state.start('MainMenu');
  }

};