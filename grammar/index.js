
var grammar = tracery.createGrammar({

  "alphabet": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  "greek_god": ["Achelous", "Aeolus", "Aether", "Alastor", "Apollo", "Ares", "Aristaeus", "Asclepius", "Atlas", "Attis", "Boreas", "Caerus", "Castor", "Cerus", "Chaos", "Charon", "Cronos", "Crios", "Cronus", "Dinlas", "Dionysus", "Erebus", "Eros", "Eurus", "Glaucus", "Hades", "Helios", "Hephaestus", "Heracles", "Hermes", "Hesperus", "Hymenaios", "Hypnos", "Kratos", "Momus", "Morpheus", "Nereus", "Notus", "Oceanus", "Pallas", "Pan", "Phosphorus", "Plutus", "Pollux", "Pontus", "Poseidon", "Priapus", "Pricus", "Prometheus", "Proteus", "Tartarus", "Thanatos", "Triton", "Typhon", "Uranus", "Zelus", "Zephyrus", "Zeus"],

  "norse_god": ["Bolverk", "Einherjar", "Eir", "Fjorgyn", "Fulla", "Gangnrad", "Grimnir", "Harbard", "Hermod", "Hod", "Honir", "Idun", "Kvasir", "Lofn", "Magni", "Mimir", "Modgud", "Modi", "Moon", "Nanna", "Narvi", "Night", "Norns", "Od", "Ran", "Rig", "Rind", "Saga", "Sif", "Sigyn", "Sjofn", "Sun", "Syn", "Thrud", "Ull", "Var", "Vidar", "Vor", "Algron", "Bilskirnir", "Breidablik", "Elivagar", "Eljudnir", "Fensalir", "Folkvang", "Gimli", "Ginnungagap", "Gladsheim", "Glitnir", "Gnipahellir", "Himinbjorg", "Hlesey", "Hlidskjalf", "Hnitbjorg", "Hvergelmir", "Idavoll", "Iving", "Lyfjaberg", "Lyngvi", "Lyr", "Muspell", "Nastrond", "Okolnir", "Sessrumnir", "Sindri", "Sokkvabekk", "Svartalfheim", "Thrudheim", "Thrymheim", "Utgard", "Valaskjalf", "Vigrid", "Vingolf", "Ydalir"],

  "animals": words.animals,
  "words": words.words,

  "product_name": [
    "#greek_god#",
    "#norse_god#",
    "#animals.mutate.capitalize#",
    "#words.mutate.capitalize#",
    "#alphabet##alphabet##alphabet#d"
  ],

  "pl_name": [
    "#greek_god#",
    "#norse_god#",
    "#animals.capitalize#",
    "#words.capitalize#",
  ],

  "value_judgement": [
    "open-source", "enterprise-grade", "enterprise-ready",
    "reliable", "highly available", "distributed", "resilient", "fault-tolerant",
    "scalable", "scale-born", "massively parallel", "multi-master", "web-scale", "cloud-native",
    "serverless", "elastic", "cloud-based", "load-balanced",
    "flexible", "rock-solid",
    "real-time", "lightning-fast", "blazing fast",
    "high-performance", "performant", "fast", "efficient",
    "generalized", "specialized", "ad hoc",
    "batteries-included", "lightweight", "powerful", "composable",
    "monadic", "monoidal", "category-theoretic", "arrowized",
    "fearlessly concurrent", "brutally practical",
    "secure",
    "end-to-end",
    "bare-metal", "dead simple",

    // "blockchain-based", "trustless",
    // "progressive", "responsive", "mobile-first", "expressive",
  ],

  "value_judgement_data": [
    "high-dimensional",
    "massive",
    "complex",
    "monoidal",
    "enormous",
    "distributed",
  ],

  "value_judgement_data_structure": [
    "relational",
    "graph-structured",
    "NoSQL",
    "time-series",
    "unstructured",
    "ad hoc",
    "schemaless",
    "JSON",
  ],

  "product_type": [
    "PaaS",
    "SaaS",
    "platform",
    "system",
    "stack",
    "load-balancer",
    "key-value store",
    "framework",
    "library",
    "data warehouse",
    "in-memory cache",
    "MVC framework",
    "solution",
    "document database",
    "NoSQL database",
    "engine",
    "execution engine",
    "GUI toolkit",
  ],

  "consumer_type": [
    "server",
    "ETL pipeline",
    "continuous integration environment",
    "continuous delivery pipeline"
  ],

  "product_action": [
    "#processing#",
    "#orchestration#",
    "rapid app development",
    "parallel computation",
  ],

  "processing_action_verb": ["analysis", "processing", "visualization", "execution", "storage", "querying", "ingestion"],

  "processing": ["the #value_judgement# #processing_action_verb# of #value_judgement_data# #value_judgement_data_structure# #product_operates_on_data#"],

  "orchestration_gerund_verb": ["orchestration", "provisioning", "management", "administration", "monitoring", "configuration management"],

  "orchestrating_action_verb": ["orchestrating", "provisioning", "managing", "monitoring", "configuring"],

  "orchestration": [
    "the #value_judgement# #orchestration_gerund_verb# of #product_operates_on_machines#",
    "#orchestrating_action_verb# #value_judgement# #product_operates_on_machines#"
  ],

  "product_operates_on_data": [
    "datasets", "data", "streams", "binary blobs", "RDF triples", "JSON documents", "data-flow graphs", "task DAGs"
  ],

  "product_operates_on_machines": [
    "datacenters", "multi-datacenter clusters", "clusters", "containers", "applications", "processes", "machines", "compute"
  ],
  "tm": ["™", "®", "©"],
  "apache": [
    // "Apache",
    "Tomahawk"
  ],

  // "product_feature": [
  //   "end-to-end encryption",
  // "no single points of failure",
  // ],

  "product_blurb": [
    "The #apache##tm# #product_name##tm# project develops #value_judgement# software for #value_judgement#, #value_judgement#, #value_judgement# computing. It is #value_judgement.a# #product_type# designed for #product_action# using a #value_judgement# programming model.",
    "#product_name##tm# is #value_judgement.a#, #value_judgement# #product_type# for #product_action#.",
    "#product_name##tm# is #value_judgement.a# #product_type# and #value_judgement# #product_type# for #product_action#.",
    "#product_name##tm# is #value_judgement.a#, #value_judgement# #product_type# for #value_judgement# #consumer_type.s#."
  ],

  "pl_paradigm1": [
    "open-source",
  ],

  "pl_paradigm2": [
    "non-blocking",
    "event-driven",
    "non-Turing-complete",
    "weakly-typed",
    "stringly-typed",
    "strongly-typed",
    "nondeterministic",
  ],

  "pl_paradigm3": [
    "actor-model",
    "esoteric",
    "concatenative",
    "capabilities-secure",
    "dynamically-typed",
    "statically-typed",
  ],

  "pl_paradigm4": [
    "functional",
    "object-oriented",
    "multi-paradigm",
    "procedural",
    "imperative",
  ],

  "pl_feature": [
    "evented I/O",
    "zero-cost abstractions",
    "move semantics",
    "guaranteed memory safety",
    "threads without data races",
    "trait-based generics",
    "pattern matching",
    "type inference",
    "a minimal runtime",
    "efficient C bindings",
    "generics",
    "higher-kinded types",
    "static binaries",
    "trivial deployment",
    "coroutines",
    "generators",
    "typeclasses",
    "a fine-grained effect system",
    "no falsy values except false, null, undefined, 0, NaN, and the empty string",
    "two kinds of equality",
    "two kinds of null values",
    "two kinds of zero",
    "null pointers",
    "implicit coercions",
    "garbage collection",
    "unchecked array access",
    "total division by zero",
    "explicit error-handling",
    "error-handling using product types",
    "portable native compilation",
    "an enterprise-grade virtual machine",
    "guaranteed performance",
    "exactly one way to do things",
    "runes",
    "simplicity as a core virtue",
    "lightweight threads",
    "green threads",
    "segmented stacks",
    "mid-stack inlining",
    "a concurrent, tri-color, mark-sweep garbage collector",
    "no place for stop-the-world GC pauses",
    "sub-millisecond GC pauses",
    "an enterprise-grade garbage collector",
    "nontermination guarantees",
    "logic variables",
    "implicit backtracking",
    "a modern website",
    "a gradually-sound type system",
  ],

  "pl_blurb": [
    "#pl_name# is #value_judgement.a#, #pl_paradigm1#, #pl_paradigm2#, #pl_paradigm3#, #pl_paradigm4# programming language.#pl_blurb_extended#"
  ],

  "pl_blurb_extended": [
    " It features #pl_feature#, #pl_feature#, and #pl_feature#.#pl_blurb_extended#",
    " It also has #pl_feature#, #pl_feature#, and #pl_feature#.#pl_blurb_extended#",
    // need a premise rule
    // " It is built on #pl_feature# and #pl_feature#.#pl_blurb_extended#",
    "",
  ],

  "commit_area": [
    "date parsing",
    "serialization",
    "input parsing",
    "client",
    "server",
    "frontend",
    "migration",
    "db access",
    "entity",
    "undo",
    "tests",
    "dsl",
    "transaction",
    "config",
    "argument parsing",
    "flag",
    "view",
    "model",
    "build",
    "validation",
    "checker",
    "parser",
    "http",
  ],

  "commit_message": [
    "finally working",
    "fix when #product_name.lower#/#product_name.lower#\\##commit_area.rnd# next releases",
    "ugh not working but too tired",
    "wip",
    "WIP add db password. don't push this",
    "TESTING aws keys. don't push this",
    "i hate js",
    "use applicative instance",
    "if err != nil",
    "hack around missing #commit_area#",
    "this is a hack and so am i",
    "update gitignore",
    "new file for #commit_area#",
    "Merge branch '#commit_area.dash#' into 'master'",
    "fix merge conflict",
    "fix compilaton error",
    "fix type error",
    "fix kind error",
    "fix failing test",
    "fix nondeterministic test",
    "save game",
    "new class for #commit_area#",
    "new service for #commit_area#",
    "new #commit_area# for #commit_area#",
    "pull out #commit_area# into new function",
    "revert this when #commit_area# is done",
    "refactor #commit_area#",
    "don't join so much",
    "that was a bad idea, reverted",
    "move classes around",
    "pull out #commit_area# microservice",
    "bump #commit_area#",
    "fix bug with #commit_area#",
    "optimize #commit_area#",
    "throw exception if #commit_area# fails",
    "rethrow",
    "ignore #commit_area# failure",
    "add #product_name.lower# library",
    "more effective use of #commit_area# api",
    "return 500 on #commit_area# error",
  ],

  "industry": [
    "dating", "security", "social network", "finances", "gaming",
    "entertainment", "food delivery", "drones", "self-driving cars",
    "cryptocurrency", "the blockchain", "deep learning",
  ],

  "audience": [
    "babies", "millennials", "athletes", "gamers", "travellers",
    "foodies", "hipsters", "writers", "blue-collar workers",
    "startups", "small business owners",
  ],

  "industry_giant": [
    "Uber", "Facebook", "Twitter", "Instagram", "Pinterest", "Slack",
  ],

  "value": [
    "value"
  ],

  "problem": [
    "dating in a postmodern society",
    "finding love on the internet",
    "making a genuine connection online",
    "emotional poverty in first-world societies",
    "compassion being at its lowest since the 90s",
    "artificial general intelligence",
    "driving being too hard and error-prone",
    "acquiring food without having to leave the house",
    "programming being too hard and logical",
    "learning being too manual and difficult",
    "travelling requiring you to actually be present",
    "packing for travels being too manual a process",
    "transport for drunk people",
    "making small talk for sober people",
  ],

  "do_thing": [
    "date anonymously",
    "share cute animal photos",
    "converse with a bot",
    "make small talk with each other",
  ],

  "business_model": [
    "is free-to-use, with premium features behind microtransactions",
    "is basically a large upfront payment with optional installments",
    "begins at a free tier which upsells customers into a lifelong series of payments",
  ],

  "pitch": [
    "Like #industry_giant# but for #industry#. We tackle the problem of #problem# by allowing #audience# to #do_thing#. Our business model #business_model#.",
  ],
});

// It is designed to scale from single servers to thousands of machines.


grammar.addModifiers(tracery.baseEngModifiers);
grammar.addModifiers({
  lower(s) {
    return s.toLowerCase();
  },
  dash(s) {
    return s.replace(/\s+/, '-');
  },
  rnd() {
    // returns a random number. this is a hack because it doesn't use its
    // argument, but that's what you get when your dsl is strings in json
    let max = 100;
    let min = 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  mutate(s) {
    let choices = [
      [/e/, 'y'],
      [/e/, 'ii'],
      [/y/, 'ii'],
      [/y/, 'e'],
      [/i/, 'y'],
      [/i/, 'e'],
      [/a/, 'ar'],
      [/a/, 'ah'],
      [/$/, '.io'],
      [/$/, 'ly'],
    ].filter(a => !!s.match(a[0]));

    let replacement = choices[Math.floor(Math.random() * choices.length)];
    return s.replace(...replacement);
  }
});

function test() {
  for (var i = 0; i < 4; i++) {
    console.log(grammar.flatten('#product_blurb#') + '\n');
  }

  for (var i = 0; i < 4; i++) {
    console.log(grammar.flatten('#pl_blurb#') + '\n');
  }

  for (var i = 0; i < 10; i++) {
    console.log(grammar.flatten('#commit_message#'));
  }
}

function getRandomProductBlurb() {
  return grammar.flatten('#product_blurb#');
}

function getRandomPLBlurb() {
  return grammar.flatten('#pl_blurb#');
}

function getRandomCommitMessage() {
  let msg = grammar.flatten('#commit_message#');
  let branch = ['master', 'develop'].concat(grammar.flatten('#commit_area.dash#'));
  let hash = btoa(Math.random() * 1000).slice(0, 6).toLowerCase();

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function sample(array) {
    return array[random(0, array.length-1)];
  }

  let files = random(10, 30);
  let inserted = random(300, 1000);
  let deleted = random(300, 1000);

  let full = `[${sample(branch)} ${hash}] ${msg}
   ${files} files changed, ${inserted} insertions(+), ${deleted} deletions(-)`

  return full;
}

function getAlternatives(grammar, rule) {
  // This is only intended to work with grammars one level deep
  // (because it's easier, and because there are exponentially-many
  // leaves, which isn't useful to us when rendering a form)

  let root = grammar.createRoot(rule);
  root.expandChildren(rule);
  const RAW = 0;
  const RULE = 1;
  return root.children[0].children
    .map(c => c.type == RULE ? grammar.symbols[c.symbol].rawRules : c.raw);
}

//test();
