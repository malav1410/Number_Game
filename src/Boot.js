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

    this.stage.disableVisibilityChange = true;

    if (this.game.device.desktop)
    {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.setMinMax(480, 360, 800, 600);
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    }
    else
    {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.setMinMax(480, 360, 800, 600);
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.forceOrientation(true, false);
        this.scale.setResizeCallback(this.gameResized, this);
        this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
        this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
    }
    this.game.state.start('Preloader');
  },
  
  enterIncorrectOrientation: function () {

    BasicGame.orientated = false;

    document.getElementById('orientation').style.display = 'block';

  },

  leaveIncorrectOrientation: function () {

    BasicGame.orientated = true;

    document.getElementById('orientation').style.display = 'none';

  }

};