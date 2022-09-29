
//SIMBA
function toggleSimba() {
  document.querySelectorAll('.cast-info').forEach(el => {
    el.classList.remove('visible');
  });

  let simbaInfo = document.getElementById('mySimba');
  simbaInfo.classList.toggle('visible');
}

let simbaButton = document.getElementById('simbaButton');
simbaButton.addEventListener('click', toggleSimba);

//NALA
function toggleNala() {
  document.querySelectorAll('.cast-info').forEach(el => {
    el.classList.remove('visible');
  });

  let nalaInfo = document.getElementById('myNala');
  nalaInfo.classList.toggle('visible');
}

let nalaButton = document.getElementById('nalaButton');
nalaButton.addEventListener('click', toggleNala);

//MUFASA
function toggleMufasa() {
  document.querySelectorAll('.cast-info').forEach(el => {
    el.classList.remove('visible');
  });

  let mufasaInfo = document.getElementById('myMufasa');
  mufasaInfo.classList.toggle('visible');
}

let mufasaButton = document.getElementById('mufasaButton');
mufasaButton.addEventListener('click', toggleMufasa);

// SARABI
function toggleSarabi() {
  document.querySelectorAll('.cast-info').forEach(el => {
    el.classList.remove('visible');
  });

  let sarabiInfo = document.getElementById('mySarabi');
  sarabiInfo.classList.toggle('visible');
}

let sarabiButton = document.getElementById('sarabiButton');
sarabiButton.addEventListener('click', toggleSarabi);

// SCAR
function toggleScar() {
  document.querySelectorAll('.cast-info').forEach(el => {
    el.classList.remove('visible');
  });

  let scarInfo = document.getElementById('myScar');
  scarInfo.classList.toggle('visible');
}

let scarButton = document.getElementById('scarButton');
scarButton.addEventListener('click', toggleScar);

// ZAZU
function toggleZazu() {
  document.querySelectorAll('.cast-info').forEach(el => {
    el.classList.remove('visible');
  });

  let zazuInfo = document.getElementById('myZazu');
  zazuInfo.classList.toggle('visible');
}

let zazuButton = document.getElementById('zazuButton');
zazuButton.addEventListener('click', toggleZazu);

// TIMON & PUMBA

function toggleTimon() {
  document.querySelectorAll('.cast-info').forEach(el => {
    el.classList.remove('visible');
  });

  let timonInfo = document.getElementById('myTimon');
  timonInfo.classList.toggle('visible');
}

let timonButton = document.getElementById('timonButton');
timonButton.addEventListener('click', toggleTimon);

// PUMBA

function togglePumba() {
  document.querySelectorAll('.cast-info').forEach(el => {
    el.classList.remove('visible');
  });

  let pumbaInfo = document.getElementById('myPumba');
  pumbaInfo.classList.toggle('visible');
}

let pumbaButton = document.getElementById('pumbaButton');
pumbaButton.addEventListener('click', togglePumba);

// CURSOR
new cursoreffects.fairyDustCursor({colors: ["salmon","yellow", "red", "green"]});
