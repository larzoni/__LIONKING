function showIt() {
    document.getElementById("timon-img").style.visibility = "visible";
  }
  setTimeout("showIt()", 4000); // after 4 sec

  function showIt2() {
    document.getElementById("content-intro").style.visibility = "visible";
  }
  setTimeout("showIt2()", 4500); // after 4.5 sec
  
  function showIt3() {
    document.getElementById("showitem3").style.visibility = "visible";
  }
  setTimeout("showIt3()", 7000); // after 7 sec
 
  function wrongAnswer() {
    let box = document.getElementById('pumba')
    alert('Wrong answer! You meant Timon I presume?');
  }
  
  let box = document.getElementById('pumba');
  box.addEventListener('click', wrongAnswer);

  function correctAnswer () {
    let timon = document.getElementById('timon')
    alert('We have a genius here! YOU! ARE! CORRECT! Welcooome');
  }

  let timon = document.getElementById('timon');
  timon.addEventListener('click', correctAnswer);
  
  // function rightAnswer() {
  //   let box = document.getElementById('timon')
  //   alert('Wrong answer! You meant Timon I presume?');
  // }
  
  // let box = document.getElementById('timon');
  // box.addEventListener('click', rightAnswer);
  