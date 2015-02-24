Number.Leaderboard = function(game) {
  console.log("%cGame Leaderboard", "color:white; background:red");
}

Number.Leaderboard.prototype = {
  init: function(score) {
    your_score = score;
  },

  create: function() {
     this.add.sprite(0,0, 'score-board');

    // add the button that will Restart the game
    score = this.add.text(590, 160, your_score, { font: "bold 45px Ultra", fill: "#5700aa", align: "center" });

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