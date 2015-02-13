Number.Preloader = function(game) {
  console.log("%cPreloading my awesome game", "color:white; background:red");

  // Define width and height of the game
  Number.GAME_WIDTH = 900;
  Number.GAME_HEIGHT = 600;
};

Number.Preloader.prototype = {
  preload: function () {

    // Set background color and preload image
    this.stage.backgroundColor = 'D3D3D3';
    this.preloadBg = this.add.sprite((900-297)/2, (600-145)/2, 'preloaderBg');
    this.preloadBar = this.add.sprite((900-158)/2, (600-50)/2, 'preloaderBar');
    this.load.setPreloadSprite(this.preloadBar);

    // Load images
    this.load.image('header','img/header.png');
    this.load.image('button-pause', 'img/button-pause.png');
    this.load.image('button-start', 'img/button-start.png');
    this.load.image('button-menu', 'img/button-menu.png');

    // If you have any spritesheets then load them here.
    // this.load.spritesheet('button-audio', 'img/button-audio.png', 35, 35);
  },
  
  create: function () {
    // start the MainMenu state
    this.state.start('MainMenu');
  }

};