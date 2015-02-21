Number.HighScores = function (game) {
  console.log("%cGame HighScore", "color:white; background:red");
}

Number.HighScores.prototype = {
  create: function () {
    this.add.sprite(0,0, 'highscores-board');

    this.backButton = this.add.button( 10, 10, 'back-button', this.backToMainMenu);
  },

  backToMainMenu: function() {
    this.game.state.start('MainMenu');
  }
};