var slideIndex = sessionStorage.getItem("slideIndex");
var char = document.getElementById("char");
pilihChar();
function pilihChar() {
  if (slideIndex == 1) {
    char.src = "poto/1biasa.png";
  } else if (slideIndex == 2) {
    char.src = "poto/2biasa.png";
  } else if (slideIndex == 3) {
    char.src = "poto/3biasa.png";
  } else if (slideIndex == 4) {
    char.src = "poto/4biasa.png";
  }
}

function pilihCharMain() {
  if (slideIndex == 1) {
    char.src = "poto/1main.png";
  } else if (slideIndex == 2) {
    char.src = "poto/2main.png";
  } else if (slideIndex == 3) {
    char.src = "poto/3main.png";
  } else if (slideIndex == 4) {
    char.src = "poto/4main.png";
  }
}

function pilihCharMakan() {
  if (slideIndex == 1) {
    char.src = "poto/1makan.png";
  } else if (slideIndex == 2) {
    char.src = "poto/2makan.png";
  } else if (slideIndex == 3) {
    char.src = "poto/3makan.png";
  } else if (slideIndex == 4) {
    char.src = "poto/4makan.png";
  }
}

function pilihCharTidur() {
  if (slideIndex == 1) {
    char.src = "poto/1tidur.png";
  } else if (slideIndex == 2) {
    char.src = "poto/2tidur.png";
  } else if (slideIndex == 3) {
    char.src = "poto/3tidur.png";
  } else if (slideIndex == 4) {
    char.src = "poto/4tidur.png";
  }
}

function pilihCharBelajar() {
  if (slideIndex == 1) {
    char.src = "poto/1belajar.png";
  } else if (slideIndex == 2) {
    char.src = "poto/2belajar.png";
  } else if (slideIndex == 3) {
    char.src = "poto/3belajar.png";
  } else if (slideIndex == 4) {
    char.src = "poto/4belajar.png";
  }
}

function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}

var elem1 = document.getElementById("bar1");
var width1 = 100;
var timer1 = setInterval(animate1, 200);

function addMakan(timeadded) {
  clearInterval(timer1);
  timeout1(timeadded);
}

function animate1() {
  if (width1 <= 0) {
    clearInterval(timer1);
    alert("GAME OVER: GA DIKASIH MAKAN YA MATI KARAKTERMU");
    window.location.href = "choose.html";
  } else {
    width1--;
    elem1.style.width = width1 + "%";
  }
}

function lagiMakan(timeadded) {
  pilihChar();
  elem1 = document.getElementById("bar1");
  width1 = width1 + timeadded;
  if (width1 >= 100) {
    width1 = 100;
  }
  timer1 = setInterval(animate1, 200);
}

function timeout1(timeadded) {
  setTimeout(function () {
    lagiMakan(timeadded);
  }, 5000);
  pilihCharMakan();
}

var elem2 = document.getElementById("bar2");
var width2 = 100;
var timer2 = setInterval(animate2, 200);

function addMain(timeadded) {
  clearInterval(timer2);
  timeout2(timeadded);
}

function animate2() {
  if (width2 <= 0) {
    clearInterval(timer2);
    alert("Karaktermu butuh refreshing!");
  } else {
    width2--;
    elem2.style.width = width2 + "%";
  }
}

function lagiMain(timeadded) {
  pilihChar();
  elem2 = document.getElementById("bar2");
  width2 = width2 + timeadded;
  if (width2 >= 100) {
    width2 = 100;
  }
  timer2 = setInterval(animate2, 200);
}

function timeout2(timeadded) {
  setTimeout(function () {
    lagiMain(timeadded);
  }, 3000);
  pilihCharMain();
}

var elem3 = document.getElementById("bar3");
var width3 = 100;
var timer3 = setInterval(animate3, 400);

function addTidur(timeadded) {
  clearInterval(timer3);
  timeout3(timeadded);
}

function animate3() {
  if (width3 <= 0) {
    clearInterval(timer3);
    alert("Karaktermu butuh istirahat!");
  } else {
    width3--;
    elem3.style.width = width3 + "%";
  }
}

function lagiTidur(timeadded) {
  pilihChar();
  elem3 = document.getElementById("bar3");
  width3 = width3 + timeadded;
  if (width3 >= 100) {
    width3 = 100;
  }
  timer3 = setInterval(animate3, 200);
}

function timeout3(timeadded) {
  setTimeout(function () {
    lagiTidur(timeadded);
  }, 3000);
  pilihCharTidur();
}

//bar belajar
var elem4 = document.getElementById("bar4");
var width4 = 0;
var timer4;
var counter = 1;
var isClick = false;

function addBelajar(timeadded) {
  isClick = true;
  var infoSemester = document.getElementById("infoSemester");
  infoSemester.innerHTML = "Semester " + counter;
  clearInterval(timer4);
  timeout4(timeadded);
}

function animate4() {
  if (width4 <= 0) {
    clearInterval(timer4);
    if (isClick) {
      alert("GAME OVER: Anda di DO");
      window.location.href = "choose.html";
    }
  } else {
    width4--;
    elem4.style.width = width4 + "%";
  }
}

function lagiBelajar(timeadded) {
  pilihChar();
  elem4 = document.getElementById("bar4");
  width4 = width4 + timeadded;
  elem4.style.width = width4 + "%";
  if (width4 >= 100) {
    if (counter == 8) {
      alert("Selamat Anda Lulus Kuliah");
      infoSemester.innerHTML = "Selamat Anda Sudah Lulus";
      width4 = 100;
      elem4.style.width = width4 + "%";
      clearInterval(timer4);
    } else {
      alert("Selamat Anda Lulus Semester " + counter + "!");
      counter++;
      infoSemester.innerHTML = "Semester " + counter;
      width4 = 0;
      elem4.style.width = width4 + "%";
      isClick = false;
    }
  }
  if (counter != 8) {
    timer4 = setInterval(animate4, 500);
  }
}

function timeout4(timeadded) {
  setTimeout(function () {
    lagiBelajar(timeadded);
  }, 3000);
  pilihCharBelajar();
}

var h = 6;
var m = 0;

setTime();

setInterval(function () {
  setTime();
}, 1000);

function setTime() {
  m = m + 5;
  if (m == 60) {
    h = h + 1;
    m = 0;
  }
  if (h == 24) {
    h = 0;
  }
  if (h == 12 && m == 0) {
    alert("GOOD AFTERNOON!");
  }
  if (h == 18 && m == 0) {
    alert("GOOD EVENING!");
  }
  if (h == 21 && m == 0) {
    alert("GOOD NIGHT!");
  }
  if (h == 6 && m == 0) {
    alert("GOOD MORNING!");
  }

  var hour = 360 * (h / 12);
  var minute = 360 * (m / 60);
  document.getElementById("hour").style.transform = "rotate(" + hour + "deg)";
  document.getElementById("minute").style.transform = "rotate(" + minute + "deg)";
  document.getElementById("second").style.transform = "rotate(" + second + "deg)";
}

var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

window.addEventListener("DOMContentLoaded", (event) => {
  const mySong = document.querySelector("mySong");
  mySong.play();
});

icon.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    icon.src = "poto/unmuted.png";
  } else {
    mySong.pause();
    icon.src = "poto/muted.png";
  }
};
