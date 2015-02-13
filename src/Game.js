Number.Game = function(game) {
  console.log("%cGame started", "color:white; background:red");

}

Number.Game.prototype = {
  init: function() {
    counter = 0;
  },

  create: function() {
    
    pauseButton = this.add.button(850, 8, 'button-pause', this.managePause, this);


    txt = this.add.text( 100, 100, 'Click to finish game!', { font: "25px Arial", fill: "#F90600", align: "center" });
    text = this.add.text(this.world.centerX, this.world.centerY, 'Counter: 0', { font: "64px Arial", fill: "#ffffff", align: "center" });
    text.anchor.setTo(0.5, 0.5);

    timer = this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);

    //  Click to remove
    this.input.onDown.add(this.removeCounter, this);

  },
  
  updateCounter: function() {
    counter++;
    text.setText('Counter: ' + counter);
  },

  removeCounter: function() {
    //  Removes the timer
    this.time.events.remove(timer);

    this.state.start('Gamecompleted',true,false, counter);

  },
  
  update: function() {
  },

  managePause: function() {
    if (this.game.paused === false) {
      // pause the game
      this.game.paused = true;
      // add proper informational text
      var pausedText = this.add.text(180, 250, "Game paused.", { font: "50px Arial", fill: "#5800aa", align: "center" });  
    }
    else {
      // remove the pause text
      pausedText.destroy();
      // unpause the game
      this.game.paused = false;
    }
  },

  showCount: function() {
    text = this.add.text(this.world.centerX, this.world.centerY, count, { font: "100px Arial", fill: "#ffffff", align: "center" });
  }
};
