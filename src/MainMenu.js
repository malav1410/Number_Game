Number.Mainmenu = function (game) {
  console.log("%cLoading my awesome Mainmenu", "color:white; background:red");
};

Number.Mainmenu.prototype = {
  create: function() {
    // Add mainmenu title
    this.add.sprite(0,0, 'game_background');
    //this.add.sprite((Number.GAME_WIDTH-670)/2, 60, 'header');

    // add the button that will start the game
    this.startButton = this.add.button( 356, 345, 'start-button', this.startGame, this, 1, 0, 2);
    this.highScoreButton = this.add.button( 356, 425, 'highscore-button', this.loadLeaderBoard, this, 1, 0, 2);
    this.helpButton = this.add.button( 356, 505, 'help-button', this.loadHelp, this, 1, 0, 2);
  },

  startGame: function() {
    this.state.start('Game');
  },

  loadLeaderBoard: function() {
    this.state.start('Leaderboard');
  },

  loadHelp: function() {
    this.state.start('Help');
  }

};