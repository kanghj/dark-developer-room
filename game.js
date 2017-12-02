

// The state of the entire world.
// This should be all that's needed to save the state of the game.
let world = {
  phase: 1,
  money: 1000,

};

const LOCAL_STORAGE_KEY = 'game';

function saveGame() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(world));
}

function loadGame() {
  world = localStorage.getItem(LOCAL_STORAGE_KEY);
}

function clearSavedGame() {
  localStorage.setItem(LOCAL_STORAGE_KEY, '{}');
}

let ui = {};

$(() => {
  ui.money = $('#part1-money');
  gameLoop();
  setInterval(gameLoop, 1000)
});

function gameLoop() {
  // save();

  step();
  render();
}

function step() {
  world.money -= 1;
}

function render() {
  ui.money.html(`$${world.money}`);
}

