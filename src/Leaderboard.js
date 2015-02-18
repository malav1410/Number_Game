Number.Leaderboard = function(game) {
  console.log("%cGame Leaderboard", "color:white; background:red");
}

Number.Leaderboard.prototype = {
  create: function() {
     this.add.sprite(0,0, 'leader-board-background');

    // add the button that will Restart the game
    this.nextLevelButton = this.add.button( 590, 290, 'next-level-button', this.RestartGame, this, 1, 0, 2);
    this.rePlayButton = this.add.button( 590, 390, 're-play-button', this.RestartGame, this, 1, 0, 2);
    this.mainMenuButton = this.add.button( 590, 490, 'main-menu-button', this.MainMenu, this, 1, 0, 2);
    
  },

  RestartGame: function() {
    this.state.start('Game',true,false);
  },

  MainMenu: function() {
    this.state.start('MainMenu');
  }
};