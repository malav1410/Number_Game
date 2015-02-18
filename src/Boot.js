var Number = {};


Number.Boot = function(game){
  console.log("%cStarting my awesome game", "color:white; background:red");
};

Number.Boot.prototype = {
  preload: function() {
    this.load.image("game_background", "img/game_background.png");
    this.load.image("preloaderBg", "img/loading-bg.png" );
    this.load.image("preloaderBar", "img/loading-bar.png");

  },
  create: function() {
    
    this.input.maxPointers = 1;
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.scale.setScreenSize(true);
    this.state.start('Preloader');
  }

};