Number.Preloader = function(game) {
  console.log("%cPreloading my awesome game", "color:white; background:red");

  // Define width and height of the game
  Number.GAME_WIDTH = 900;
  Number.GAME_HEIGHT = 600;
};

Number.Preloader.prototype = {
  init: function () {
    this.add.sprite(0,0, 'game_background');
  },
  
  preload: function () {

    // Set background color and preload image
    this.preloadBg = this.add.sprite(270, 480, 'preloaderBg');
    this.preloadBar = this.add.sprite(270, 480, 'preloaderBar');
    this.load.setPreloadSprite(this.preloadBar);

    // Load Main menu images
    this.load.image('header','img/header.png');
    this.load.image('button-pause', 'img/button-pause.png');
    this.load.image('start-button', 'img/start-button.png');
    this.load.image('highscore-button', 'img/highscore-button.png');
    this.load.image('help-button', 'img/help-button.png');
    
    // Load Leader board images
    this.load.image('leader-board-background', 'img/leader-board-background.png');
    this.load.image('next-level-button', 'img/next-level-button.png');
    this.load.image('re-play-button', 'img/re-play-button.png');
    this.load.image('main-menu-button', 'img/main-menu-button.png');

    

    // If you have any spritesheets then load them here.
    // this.load.spritesheet('button-audio', 'img/button-audio.png', 35, 35);
  },
  
  create: function () {
    // start the MainMenu state
    this.state.start('MainMenu');
  }

};