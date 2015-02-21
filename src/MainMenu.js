Number.Mainmenu = function (game) {
  console.log("%cLoading my awesome Mainmenu", "color:white; background:red");
};

Number.Mainmenu.prototype = {
  create: function() {
    // Add mainmenu title
    this.add.sprite(0,0, 'game_background');
    //this.add.sprite((Number.GAME_WIDTH-670)/2, 60, 'header');

    // add the button that will start the game
    this.startButton = this.add.button( 315, 345, 'start-button', this.startGame);
    this.highScoreButton = this.add.button( 315, 425, 'highscore-button', this.loadLeaderBoard);
    this.helpButton = this.add.button( 315, 505, 'help-button', this.loadHelp);
  },

  startGame: function() {
    this.game.state.start('Game');
  },

  loadLeaderBoard: function() {
    this.game.state.start('HighScores');
  },

  loadHelp: function() {
    this.game.state.start('Help');
  }

};