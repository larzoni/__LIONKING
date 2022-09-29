function toggleSimba() {
  document.querySelectorAll('.cast-info').forEach(el => {
    el.classList.remove('visible');
  });

  let simbaInfo = document.getElementById('mySimba');
  simbaInfo.classList.toggle('visible');
}

let simbaButton = document.getElementById('simbaButton');
simbaButton.addEventListener('click', toggleSimba);


function toggleNala() {
  document.querySelectorAll('.cast-info').forEach(el => {
    el.classList.remove('visible');
  });

  let nalaInfo = document.getElementById('myNala');
  nalaInfo.classList.toggle('visible');
}

let nalaButton = document.getElementById('nalaButton');
nalaButton.addEventListener('click', toggleNala);