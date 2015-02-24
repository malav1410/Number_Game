Number.Game = function(game) {
  console.log("%cGame started", "color:white; background:red");

}

Number.Game.prototype = {
  init: function() {
    score = 0;
    counter = 3;
    seconds_counter = 30;
    textStyle = { font: '64px Desyrel', align: 'center'};
    number_array = [1,2,3,4,5,6,7,8,9];
    operations = ["+","-"];
    question_texts = ["GREATER", "LESSER"]
    
    this.getValues();
    
  },
  
  getValues: function() {

    this.getPairOne();
    this.getPairTwo();
    this.getQuestionText();
    this.getAnswer();
  },

  getQuestionText: function() {
    question_text = question_texts[Math.floor(Math.random()*question_texts.length)];
  },

  getPairOne: function () {
    number1 = number_array[Math.floor(Math.random()*number_array.length)];
    number2 = number_array[Math.floor(Math.random()*number_array.length)];
    sign1 = operations[Math.floor(Math.random()*operations.length)];

    left_option = number1 + " " + sign1 + " " + number2;

    if ( sign1 === '+' )
    {
      left_value = number1 + number2
    }
    else
    {
      left_value = number1 - number2
    }

  },

  getPairTwo: function () {
    number3 = number_array[Math.floor(Math.random()*number_array.length)];
    number4 = number_array[Math.floor(Math.random()*number_array.length)];
    sign2 = operations[Math.floor(Math.random()*operations.length)];

    right_option = number3 + " " + sign2 + " " + number4;

    if ( sign2 === '+' )
    {
      right_value = number3 + number4
    }
    else
    {
      right_value = number3 - number4
    }

  },

  getAnswer: function() {
    greater_value = Math.max(right_value, left_value);
    lesser_value = Math.min(right_value, left_value);

    if ( (( question_text === "GREATER" ) && ( greater_value === right_value)) || (( question_text === "LESSER" ) && ( lesser_value === right_value)) )
    {
      answer_is = 'right';
    }
    else if ( (( question_text === "GREATER" ) && ( greater_value === left_value)) || (( question_text === "LESSER" ) && ( lesser_value === left_value)) ) 
    {
      answer_is = 'left';
    }
  },

  create: function() {

    // Set background image
    this.add.sprite( 0, 0, 'background');
    this.add.sprite( 20, 25, 'score-image');
    
    this.add.sprite( 220, 22, 'timer-image');

    this.add.sprite( 60, 350, 'button');
    this.add.sprite( 460, 350, 'button');
    pauseButton = this.add.button(720, 20, 'pause-button', this.managePause, this);


    txt = this.add.text( 380, 200, 'PICK', { font: "bold 12px sans", fill: "#5700aa", align: "center" });


    // Game started countdown
    text = this.add.text(this.world.centerX, this.world.centerY, '3', { font: "84px Arial", fill: "#ffffff", align: "center" });
    timer = this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
    text.anchor.setTo(0.5, 0.5);
    text.inputEnabled = true;

    seconds_text = this.add.text(290, 55, '30', { font: "bold 25px Ultra", fill: "#5700aa", align: "center" });
    seconds_text.anchor.setTo(0.5,0.5);

    score_text = this.add.text(90, 55, '0', { font: "bold 25px Ultra", fill: "#5700aa", align: "center" })
    score_text.anchor.setTo(0.5,0.5);

    this.time.events.add(Phaser.Timer.SECOND * 4, this.startGame, this);
    //  Click to remove
    //text.events.onInputDown.add(this.removeCounter, this);

  },
  
  updateCounter: function() {
    counter--;
    if (counter === 0 ) {
      text.setStyle({ font: "80px Arial", fill: "#000000", align: "center" });
      text.setText("Let's Play!");
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
    
    
  },

  startGame: function() {
    this.time.events.remove(timer);

    // Start main game counter
    seconds_timer = this.time.events.loop(Phaser.Timer.SECOND, this.updateSecondsCounter, this);
    this.time.events.add(Phaser.Timer.SECOND * 30, this.removeCounter, this);

    // Add question text
    this.displayDetails();

    // Left arrow key and Right arrow key
    leftKey = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    rightKey = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

    leftKey.onDown.add(this.checkAnswerForLeft, this);
    rightKey.onDown.add(this.checkAnswerForRight, this);

    
  },

  displayDetails: function() {

    if (question_text === 'LESSER') {
      question_text_display = this.add.text(335, 220, question_text, { font: "bold 30px sans", fill: "#5700aa", align: "center" });
    }
    else 
    {
      question_text_display = this.add.text(320, 220, question_text, { font: "bold 30px sans", fill: "#5700aa", align: "center" });
    }

    // Left button values
    left_option_text = this.add.text(155,370, left_option, { font: "bold 35px sans", fill: "#5700aa", align: "center" });

    // Right button value
    right_option_text = this.add.text(555,370, right_option, { font: "bold 35px sans", fill: "#5700aa", align: "center" });

  },

  // if user select left answer
  checkAnswerForLeft: function (){ 

    if ( answer_is === 'left' )
    {
      console.log("%cleft", "color:black; background:green");
      score = score + 50;
      score_text.setText(score);
    }
    else
    {
      console.log("%cleft", "color:black; background:red");
      score = score - 50;
      score_text.setText(score);
    }
    this.time.events.add(Phaser.Timer.SECOND * 0.5, this.resetQuestion, this);

  },

  checkAnswerForRight: function() {

    if ( answer_is === 'right' )
    {
      console.log("%cright", "color:black; background:green");
      score = score + 50;
      score_text.setText(score);
    }
    else
    {
      console.log("%cright", "color:black; background:red");
      score = score - 50;
      score_text.setText(score);
    }
    this.time.events.add(Phaser.Timer.SECOND * 0.5, this.resetQuestion, this);
  },

  resetQuestion: function() {
    question_text_display.destroy();
    left_option_text.destroy();
    right_option_text.destroy();
    this.getValues();
    this.displayDetails();
  },

  removeCounter: function() {
    
    //  Removes the timer
    this.time.events.remove(seconds_timer);

    this.state.start('Leaderboard',true,false, score);

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
