Number.Leaderboard = function() {
  console.log("%cGame Leaderboard", "color:white; background:red");
}

Number.Leaderboard.prototype = {
  create: function() {
    this.add.text(300, 100, 'Leader Board', { font: "50px Arial", fill: "#5800aa", align: "center" });
    this.add.text(250, 200, 'Malav Desai', { font: "25px Arial", fill: "#5800aa", align: "center" });
    this.add.text(550, 200, '10.00 Sec', { font: "25px Arial", fill: "#5800aa", align: "center" });
    this.add.text(250, 250, 'malav desai', { font: "25px Arial", fill: "#5800aa", align: "center" });
    this.add.text(550, 250, '12.20 Sec', { font: "25px Arial", fill: "#5800aa", align: "center" });
    this.add.text(250, 300, 'malav desai', { font: "25px Arial", fill: "#5800aa", align: "center" });
    this.add.text(550, 300, '9.87 Sec', { font: "25px Arial", fill: "#5800aa", align: "center" });

    // add the button that will Restart the game
    this.startButton = this.add.button(Number.GAME_WIDTH-301-10, Number.GAME_HEIGHT-143-10, 'button-start', this.RestartGame, this, 1, 0, 2);
    this.menuButton = this.add.button(Number.GAME_WIDTH-701-10, Number.GAME_HEIGHT-143-10, 'button-menu', this.MainMenu, this, 1, 0, 2);
  },

  RestartGame: function() {
    this.state.start('Game',true,false);
  },

  MainMenu: function() {
    this.state.start('MainMenu');
  }
};