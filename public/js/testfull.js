//randomize videos
let video = document.getElementById("video");
let source = document.createElement("source");
let count = 0;
let isMuted;

let sources = [
  "Assets/Black Excellence Elder_History.mp4",
  "Assets/Bud Bilken Parade_History.mp4",
  "Assets/Mandrake Park2_Place.mp4",
  "Assets/Sip Savor2_Place.mp4",
  "Assets/Uncle Js_Smells.mp4",
];

window.addEventListener("load", () => {
  // console.log(video.autoplay);
  video.width = windowWidth;
  video.height = windowHeight;
  let randomNumber = Math.floor(Math.random() * sources.length);

  source.setAttribute("src", sources[randomNumber]);
  console.log(randomNumber);

  video.appendChild(source);
});

let reloadButton = document.getElementById("random-button");
reloadButton.addEventListener("click", () => {
  //   for (let i = 0; i < sources.length; i++) {
  //     source.setAttribute("src", sources[i]);
  //   }

  window.location.reload();
});

let unmuteButton = document.getElementById("unmute");
let muteImage = document.getElementById("mute-image");

unmuteButton.addEventListener("click", () => {
  isMuted = !isMuted;

  console.log(isMuted);
  if (isMuted) {
    video.muted = false;
    muteImage.src = "Images/unmuted.png";
  } else {
    video.muted = true;
    muteImage.src = "Images/muted.png";
  }
});
//adapted from https://www.openprocessing.org/sketch/943740

let img;
let sh, gl;
let cnv;

function preload() {
  // img = loadImage("Images/backgroundmap.jpg");
  // sh = loadShader("shaders/grid.vert", "shaders/grid.frag");
}

function setup() {}

function draw() {}
