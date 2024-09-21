let randomColor = function () {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let id;
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");

let startColor = function () {
  document.querySelector("body").style.backgroundColor = randomColor();
};

let stopColor = function () {
  clearInterval(id);
  id = null;
};

start.addEventListener("click", function () {
  if (!id) id = setInterval(startColor, 1000);
});

stop.addEventListener("click", function () {
  clearInterval(id);
});
