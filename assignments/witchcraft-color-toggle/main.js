// variables
let messageEl = document.querySelector(".message");
let numberMessageEl = document.querySelector(".number-message");
let body = document.querySelector("body");

// Change color on toggle
const chkRed = document.getElementById("chk1");

chkRed.addEventListener("change", () => {
  if (document.body.classList.toggle("orangebox")) {
    messageEl.textContent =
      "Red you picked but it's not true, Orange is the color we brew!";
  } else {
    messageEl.textContent =
      "Hahahaha, got you there! Pick another brew please!";
  }
});

const chkgreen = document.getElementById("chk2");

chkgreen.addEventListener("change", () => {
  if (document.body.classList.toggle("bluebox")) {
    messageEl.textContent =
      "Green you say? You're sure you do? So what the witch, we brew the blue!";
  } else {
    messageEl.textContent = "Surprise! Try another brew please!";
  }
});

const chkblue = document.getElementById("chk3");

chkblue.addEventListener("change", () => {
  if (document.body.classList.toggle("pinkbox")) {
    messageEl.textContent =
      "Blue it is, that's what you think! Here we brew the color pink!";
  } else {
    messageEl.textContent = "Hahaaa, I'm a funny witch. pick another please!";
  }
});

const chkyellow = document.getElementById("chk4");

chkyellow.addEventListener("change", () => {
  if (document.body.classList.toggle("redbox")) {
    messageEl.textContent =
      "It's orange you want, that's what you said? So here we brew the color red!";
  } else {
    messageEl.textContent = "Oops I did it again hihi, try again please!";
  }
});

const chkpink = document.getElementById("chk5");

chkpink.addEventListener("change", () => {
  if (document.body.classList.toggle("greenbox")) {
    messageEl.textContent =
      "Pink you choose, that's what we've seen! But what we brew is the color green!";
  } else {
    messageEl.textContent =
      "Hahahhaaa, will you ever win from a witch? Maybe you have more luck using the numbers!";
    numberMessageEl.textContent =
      "Try to use the numbers 1 to 5, start with number 1!";
  }
});

// Change color on keyDown
window.addEventListener("keydown", (e) => {
  if (e.key == 1) {
    body.style.background = "#f58c02";
    messageEl.textContent = "Hahahhaaa, Orange again! Please continue!";
    numberMessageEl.textContent = "Continue with number 2!";
  } else if (e.key == 2) {
    body.style.background = "#0b1cd8";
    messageEl.textContent = "Oops, another blue for you! Please continue!";
    numberMessageEl.textContent = "Continue with number 3!";
  } else if (e.key == 3) {
    body.style.background = "#49d607";
    messageEl.textContent =
      "Here's what I think, this should be pink? Something is off. Please continue";
    numberMessageEl.textContent = "Continue with number 4!";
  } else if (e.key == 4) {
    body.style.background = "#d6060f";
    messageEl.textContent =
      "Hahaha, I still can do! Red it is, no orange for you!  Please continue";
    numberMessageEl.textContent = "Continue with number 5!";
  } else if (e.key == 5) {
    body.style.background = "#d5098b";
    messageEl.textContent =
      "Pink?? What the witch!! You defeat me. Go before I melt!!!!";
    numberMessageEl.textContent = "Click the 9 key to melt the witch!!!!";
  } else if (e.key == 9) {
    window.location.href = "melt.html";
  }
});
