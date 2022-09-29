// function simbaInfo() {
//     var x = document.getElementById("mySimba");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

//   function nalaInfo() {
//     var x = document.getElementById("myNala");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

function toggleSimba() {
  document.querySelectorAll('.cast-info').forEach(el => {
    el.classList.remove('visible');
  });

  let simbaInfo = document.getElementById('mySimba');
  simbaInfo.classList.toggle('visible');
}

let simbaButton = document.getElementById('simbaButton');
simbaButton.addEventListener('click', toggleSimba);