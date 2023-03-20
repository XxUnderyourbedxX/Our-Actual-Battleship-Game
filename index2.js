var players = Array.prototype.slice.call(document.getElementById('input[name=player-choice]'));
players.forEach(function(choice){
  choice.addEventListener('click', setPlayer, false);
});