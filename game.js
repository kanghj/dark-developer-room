

// The state of the entire world.
// This should be all that's needed to save the state of the game.
let world = {
  phase: 0,
  money: 1000,

  companyInfo: {
    name: undefined,
    industry: undefined,
    slogan: undefined
  }

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
  ui.money = $('#phase1-money');
  gameLoop();
  setInterval(gameLoop, 1000)
});

function renderPhaseElements() {
  $("*[class^='phase']").hide();
  $(`.phase${world.phase}`).show();
}

function phase0SetCompanyInfo() {
  world.companyInfo.name = $(".phase0 > #company-name").val();
  world.companyInfo.industry = $(".phase0 > #company-industry").val();
  world.companyInfo.slogan = $(".phase0 > #company-slogan").val();
  world.phase = 1;
}

function phase0VisionQuest() {
  $('#vision-quest').show();
}

function renderCompanyInfo() {
  if (world.companyInfo.name === undefined) {
    $("#company-info").hide();
  } else {
    $("#company-info > #name").html(world.companyInfo.name);
    $("#company-info > #industry").html(world.companyInfo.industry);
    $("#company-info > #slogan").html(world.companyInfo.slogan);
    $("#company-info").show();
  }
}


function gameLoop() {
  // save();

  step();
  render();
}

function step() {
  world.money -= 1;
}

function render() {
  renderPhaseElements();
  renderCompanyInfo();
  ui.money.html(`$${world.money}`);
}

