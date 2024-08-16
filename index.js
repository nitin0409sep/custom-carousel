//? All Images
const srcs = [
  "./assets/1.png",
  "./assets/2.png",
  "./assets/3.jpg",
  "./assets/4.png",
  "./assets/5.jpg",
];

const main = document.querySelector(".main");
const img = document.querySelector("img");

//? Track which image is loaded by circles
function trackingCirclesFormation(idx) {
  const node = document.createElement("div");
  node.style.left = `${idx * 30}px`;
  node.classList.add("circle", `circle${idx}`);
  main.appendChild(node);
}

//? Track Image by Circle
function trackImage(idx) {
  const main = document.querySelectorAll(".circle");
  main.forEach((item) => {
    item.classList.value.split(" ")[1] === `circle${idx}`
      ? (item.style.backgroundColor = "red")
      : (item.style.backgroundColor = "white");
  });
}

//? Load Images
function setImages() {
  srcs.forEach((val, idx) => {
    setTimeout(() => {
      img.setAttribute("src", val);
      trackImage(idx);
    }, 2000 * idx);
  });
}

//!! As the DOM Content Loaded it will be triggered Automatically
document.addEventListener("DOMContentLoaded", () => {
  //? Add Tracking Circles
  for (let val = 0; val < srcs.length; val++) {
    trackingCirclesFormation(val);
  }

  //? Initial Call
  setImages();

  //? Start Image Cycle
  setInterval(() => {
    setImages();
  }, 2000 * srcs.length);
});
