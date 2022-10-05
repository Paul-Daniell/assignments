const chkRed = document.getElementById("chk1");

chkRed.addEventListener("change", () => {
  document.body.classList.toggle("redbox");
});

const chkgreen = document.getElementById("chk2");

chkgreen.addEventListener("change", () => {
  document.body.classList.toggle("greenbox");
});

const chkblue = document.getElementById("chk3");

chkblue.addEventListener("change", () => {
  document.body.classList.toggle("bluebox");
});

const chkyellow = document.getElementById("chk4");

chkyellow.addEventListener("change", () => {
  document.body.classList.toggle("yellowbox");
});

const chkpink = document.getElementById("chk5");

chkpink.addEventListener("change", () => {
  document.body.classList.toggle("pinkbox");
});
