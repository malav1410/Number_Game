Number.Gamecompleted = function(game) {
  console.log("%cGame finished", "color:white; background:red");

}

Number.Gamecompleted.prototype = {
  init: function(counter) {
    alert("Game Over!! Loop count = " + counter );
  },

  create: function() {
    this.state.start("Leaderboard");
  },
};