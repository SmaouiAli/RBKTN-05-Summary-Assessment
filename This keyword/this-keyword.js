// Example use :
//
// sport.playerNames();
// returns ["Serena Williams plays tennis", "Margaret Court plays tennis"]

var sport = {
  name: "tennis",
  players: [
    { name: "Serena Williams", age: 37 },
    { name: "Margaret Court", age: 76 },
  ],
  playerNames: function () {
    // Fix me
    return this.players.map(function (player) {
      return player.name + " plays " + this.name;
    });
  },
};
