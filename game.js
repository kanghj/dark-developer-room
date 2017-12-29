

// The state of the entire world.
// This should be all that's needed to save the state of the game.
let world = {
  day: 0,
  phase: 0,
  money: 1000,
  features: 0,
  technicalDebt: 0,
  product_completion: 0,
  max_product_completion: 100,
  hype: 0,

  reach: 0,
  users: 0,
  user_to_customer_rate: 0, // conversion rate
  customers: 0,
  revenue: 0,

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
  phase0Initialise();
  gameLoop();
  setInterval(gameLoop, 1000);
});

function renderPhaseElements() {
  $("*[class^='phase']").hide();
  $(`.phase${world.phase}`).show();
}

function phase0Initialise() {
  let container = $('#phase0-init-character');
  let { elt, getValue } = fillInTheBlanksElement(getAlternatives(grammar, '#orchestration#'))
  container.append(elt);
  phase0Initialise.get = getValue;
}

function phase0SetCompanyInfo() {
  world.companyInfo.name = $(".phase0 > #company-name").val();
  world.companyInfo.industry = $(".phase0 > #company-industry").val();
  world.companyInfo.slogan = phase0Initialise.get(); //$(".phase0 > #company-slogan").val();
  phase1Initialise();
  gameLoop();
}

function phase0VisionQuest() {
  // $('#vision-quest').show();
}

function renderCompanyInfo() {
  if (world.companyInfo.name === undefined) {
    $("#company-info").hide();
  } else {
    $('#company-info #name').html(world.companyInfo.name);
    $('#company-info #industry').html(world.companyInfo.industry);
    $('#company-info #slogan').html(world.companyInfo.slogan);
    $('#company-info #day').html('Day ' + Math.floor(world.day));
    $('#company-info').show();
  }
}

function renderResources() {
  $('#phase1-money').html(`$${Math.round(world.money)}`);
  $('#phase1-features').html(`Features: ???`); //); ${world.features}`);
  $('#phase1-users').html(`Users: ${Math.floor(world.users)}`);

  $('#phase1-customers').html(`Paying customers: ${Math.floor(world.customers)}`);

  var product_completion_percent = 1.0 * world.product_completion / world.max_product_completion;
  $('#phase1-product-completion').html(`Product Completion: ${product_completion_percent.toFixed(3)}`);
}

function phase1Initialise() {
  world.phase = 1;
  world.day = 0;
}

function phase1Commit() {
  $('#commit').html(getRandomCommitMessage());
  increaseFeatures(randomFromInterval(-0.3, 0.5));
  increaseTechnicalDebt(randomFromInterval(0.05, 1.0));
}

function increaseFeatures(amount) {
  world.features += amount;
  increaseHype(0.5 * amount);

  increaseProductCompletetion(0.1 * amount);
}

function increaseProductCompletetion(amount) {
  world.product_completion += amount;
  world.max_product_completion += amount + 1;
}

function increaseTechnicalDebt(amount) {
  world.technicalDebt += amount;
}

function increaseHype(amount) {
  world.hype += amount;
  increaseUserToCustomerRate(0.001 * amount);
}

function increaseUserToCustomerRate(amount) { // aka conversion rate
  world.user_to_customer_rate += amount;
}

function phase1Step() {
  world.users += world.reach + world.features / 500;

  world.users -= world.user_to_customer_rate;
  world.users = Math.max(0, world.users);
  world.customers += world.user_to_customer_rate;
  world.customers = Math.max(0, world.customers);

  world.revenue = world.customers * 0.005;
  world.money += world.revenue - 1;
}

function gameLoop() {
  // save();

  step();
  render();
}

function step() {
  world.day += 0.25;
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

