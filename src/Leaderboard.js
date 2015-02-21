Number.Leaderboard = function(game) {
  console.log("%cGame Leaderboard", "color:white; background:red");
}

Number.Leaderboard.prototype = {
  create: function() {
     this.add.sprite(0,0, 'score-board');

    // add the button that will Restart the game
    
    this.rePlayButton = this.add.button( 520, 310, 'playagain-button', this.RestartGame);
    this.mainMenuButton = this.add.button( 520, 410, 'main-menu-button', this.MainMenu);
    
  },

  RestartGame: function() {
    this.game.state.start('Game',true,false);
  },

  MainMenu: function() {
    this.game.state.start('MainMenu');
  }
};