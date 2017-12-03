

// The state of the entire world.
// This should be all that's needed to save the state of the game.
let world = {
  phase: 0,
  money: 1000,
  features: 0,
  users: 0,

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

function randomFromInterval(min, max) {
  return Math.random()*(max-min+1)+min;
}

$(() => {
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

function renderResources() {
  $('#phase1-money').html(`$${world.money}`);
  $('#phase1-features').html(`Featues: ${world.features}`);
  $('#phase1-users').html(`Users: ${Math.floor(world.users)}`);
}

function phase1Commit() {
  $('#commit').html(getRandomCommitMessage());
  world.features += randomFromInterval(-0.3, 0.5);
}

function phase1Step() {
  world.money -= 1;
  world.users += world.features / 50;
}

function gameLoop() {
  // save();

  step();
  render();
}

function step() {
  switch (world.phase) {
  case 1:
    phase1Step();
    break;
  }
}

function render() {
  renderPhaseElements();
  renderCompanyInfo();
  renderResources();
}

