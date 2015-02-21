Number.Help = function() {
  console.log("%cGame's Help", "color:white; background:red");
}

Number.Help.prototype = {
  create: function() {
    this.add.sprite(0,0, 'help-screen');
    this.backButton = this.add.button( 10, 10, 'back-button', this.backToMainMenu);
  },

  backToMainMenu: function() {
    this.game.state.start('MainMenu');
  }
};