Number.Mainmenu = function (game) {
  console.log("%cLoading my awesome Mainmenu", "color:white; background:red");
};

Number.Mainmenu.prototype = {
  create: function() {
    // Add mainmenu title
    this.add.sprite((Number.GAME_WIDTH-670)/2, 60, 'header');

    // add the button that will start the game
    this.startButton = this.add.button(Number.GAME_WIDTH-501-10, Number.GAME_HEIGHT-143-10, 'button-start', this.startGame, this, 1, 0, 2);
  },

  startGame: function() {
    this.state.start('Game');
  }

};