Number.Game = function(game) {
  console.log("%cGame started", "color:white; background:red");

}

Number.Game.prototype = {
  init: function() {
    counter = 3;
    seconds_counter = 10;
    textStyle = { font: '64px Desyrel', align: 'center'};
  },

  create: function() {

    // Set background image
    this.add.sprite( 0, 0, 'background');
    this.add.sprite( 20, 25, 'score-image');
    this.add.sprite( 220, 22, 'timer-image');

    this.add.sprite( 60, 350, 'button');
    this.add.sprite( 460, 350, 'button');
    pauseButton = this.add.button(720, 20, 'pause-button', this.managePause, this);


    txt = this.add.text( 380, 200, 'PICK', { font: "bold 14px Ultra", fill: "#5700aa", align: "center" });


    // Game started countdown
    text = this.add.text(this.world.centerX, this.world.centerY, '3', { font: "84px Arial", fill: "#ffffff", align: "center" });
    timer = this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
    text.anchor.setTo(0.5, 0.5);
    text.inputEnabled = true;

    seconds_text = this.add.text(290, 55, '10', { font: "bold 25px Ultra", fill: "#5700aa", align: "center" });
    seconds_text.anchor.setTo(0.5,0.5);

    this.time.events.add(Phaser.Timer.SECOND * 4, this.startGame, this);
    //  Click to remove
    //text.events.onInputDown.add(this.removeCounter, this);

  },
  
  updateCounter: function() {
    counter--;
    if (counter === 0 ) {
      text.setStyle({ font: "84px Arial", fill: "#000000", align: "center" });
      text.setText('Lets Play!');
    }
    else
    {
      text.setText(counter);

    }

    if (counter === -1) {
      text.destroy();
    }
  },

  updateSecondsCounter: function () {
    seconds_counter--;
    seconds_text.setText(seconds_counter);
  },

  
  update: function() {
    // Game logic goes here
    // Call removeCounter function  after 10 seconds.
    
    
  },

  startGame: function() {
    this.time.events.remove(timer);

    // Start main game counter
    seconds_timer = this.time.events.loop(Phaser.Timer.SECOND, this.updateSecondsCounter, this);
    this.time.events.add(Phaser.Timer.SECOND * 10, this.removeCounter, this);
  },

  removeCounter: function() {
    
    //  Removes the timer
    this.time.events.remove(seconds_timer);

    this.state.start('Gamecompleted',true,false, counter);

  },

  managePause: function() {
    // pause the game
    this.game.paused = true;
    // add proper informational text

    playButton = this.add.sprite( 720, 20, 'play-button');

    var pausedText = this.add.text(230, 500, "Game paused.\nTap anywhere to continue.", { font: "30px Arial", fill: "#000000", align: "center" });
    // set event listener for the user's click/tap the screen
    this.input.onDown.add(function(){
      // remove the pause text
      pausedText.destroy();
      playButton.destroy();
      // unpause the game
      this.game.paused = false;
    }, this);
  },

  showCount: function() {
    text = this.add.text(this.world.centerX, this.world.centerY, count, { font: "100px Arial", fill: "#ffffff", align: "center" });
  },

};
