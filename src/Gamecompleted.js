Number.Gamecompleted = function(game) {
  console.log("%cGame finished", "color:white; background:red");

}

Number.Gamecompleted.prototype = {
  init: function(counter) {
    alert("Your score" + counter );
  },

  create: function() {
    this.state.start("Leaderboard",true,false, counter);
  },
};